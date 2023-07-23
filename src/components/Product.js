import Image from "next/image";

// Helpers
import { formatMoney } from "@/helpers";

// Custom hook
import { useWebFood } from "@/hooks/useWebFood";

// Icons
import { IoIosAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";

const Product = ({ product }) => {
  const { handleSetProduct, handleChangeModal, order } = useWebFood();

  const { name, image, price } = product;

  const [itemExist, setItemExist] = useState({});

  useEffect(() => {
    const findItem = order.find((item) => item.id === product.id);
    setItemExist(findItem);
  }, [order]);

  return (
    <div
      className={`${
        itemExist ? "bg-[#eeb158]/30" : ""
      } border p-3 hover:cursor-pointer hover:scale-105 transition-all relative`}
    >
      {itemExist && (
        <p className="px-2 absolute bg-[#fcd253] font-bold rounded-full -top-2 -right-2">
          {itemExist.quantity}
        </p>
      )}
      <Image
        src={`/assets/img/${image}.jpg`}
        alt={`Image ${name}`}
        width={200}
        height={250}
      />
      <div className="p-3">
        <h3 className="text-md font-bold h-[60px]">{name}</h3>
        <p className="mb-2 font-black text-2xl text-[#eeb158]">
          {formatMoney(price)}
        </p>
        <button
          type="button"
          className="flex gap-3 items-center justify-center bg-gray-500 hover:bg-[#eeb158] text-white w-full uppercase font-bold p-2 rounded-md"
          onClick={() => {
            handleChangeModal();
            handleSetProduct(product);
          }}
        >
          <p className="m-0">{itemExist ? "Modificar" : "Agregar"}</p>
          <IoIosAddCircle />
        </button>
      </div>
    </div>
  );
};

export { Product };
