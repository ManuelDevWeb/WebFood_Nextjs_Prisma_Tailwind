import Image from "next/image";

// Helpers
import { formatMoney } from "@/helpers";

// Custom hooks
import { useWebFood } from "@/hooks/useWebFood";

// Icons
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

const ModalProduct = () => {
  const { product, handleChangeModal, addToOrder, order } = useWebFood();

  const [quantity, setQuantity] = useState(1);
  const [edition, setEdition] = useState(false);

  useEffect(() => {
    // Verify if the current modal is in the order
    const existProduct = order.find((item) => item.id === product.id);

    if (existProduct) {
      setEdition(true);
      setQuantity(existProduct.quantity);
    }
  }, [product, order]);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`Image product ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            {" "}
            <AiFillCloseCircle />
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
        <p className="mt-5 font-bold text-5xl text-[#eeb158]">
          {formatMoney(product.price)}
        </p>
        <div>
          <select
            value={quantity}
            className="mt-5 p-2 rounded-lg w-[100px] h-12 outline-none text-white bg-gray-900"
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button
          type="button"
          className="mt-5 bg-gray-500 hover:bg-[#eeb158] text-white  uppercase font-bold p-2 rounded-md"
          onClick={() => addToOrder(product, quantity)}
        >
          {edition ? "Guardar cambios" : "Agregar al pedido"}
        </button>
      </div>
    </div>
  );
};

export { ModalProduct };
