import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";

// Toastify
import { toast } from "react-toastify";

// Allow the components to access the context
const WebFoodContext = createContext();

// Allow the components to access to the state and the functions
const WebFoodProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const getCategories = async () => {
    const { data } = await axios.get("/api/categories");
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => product.price * product.quantity + total,
      0
    );

    setTotal(newTotal);
  }, [order]);

  const handleClickCategory = (category) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentCategory(category);
      setLoading(false);
    }, 600);
    router.push("/");
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const addToOrder = (product, numberItems) => {
    const quantity = parseInt(numberItems);

    const newProduct = {
      ...product,
      quantity,
    };

    // Check if the product is already in the order
    const existProduct = order.find((item) => item.id === product.id);

    if (existProduct) {
      const newOrder = order.map((item) =>
        item.id === product.id ? { ...item, quantity: quantity } : item
      );
      setOrder(newOrder);
      // Alert product updated
      toast.success("Producto actualizado");
    } else {
      setOrder([...order, newProduct]);
      // Alert product added
      toast.success("Producto agregado al pedido");
    }

    setModal(false);
  };

  const handleEditQuantity = (id) => {
    const findProduct = order.filter((item) => item.id === id);

    setProduct(findProduct[0]);
    setModal(!modal);
  };

  const handleDeleteProduct = (id) => {
    const newOrder = order.filter((item) => item.id !== id);

    setOrder(newOrder);
  };

  const saveOrder = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/orders", {
        name,
        date: Date.now().toString(),
        total,
        items: order,
      });

      // Reset app
      setCurrentCategory(categories[0]);
      setOrder([]);
      setName("");
      setTotal(0);

      toast.success("Pedido guardado");

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WebFoodContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        loading,
        handleSetProduct,
        product,
        handleChangeModal,
        modal,
        addToOrder,
        order,
        handleEditQuantity,
        handleDeleteProduct,
        setName,
        name,
        saveOrder,
        total,
      }}
    >
      {children}
    </WebFoodContext.Provider>
  );
};

export { WebFoodContext, WebFoodProvider };
