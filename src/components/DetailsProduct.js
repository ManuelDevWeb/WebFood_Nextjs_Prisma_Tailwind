import Image from "next/image";

// Custom hook
import { useWebFood } from "@/hooks/useWebFood";

// Helpers
import { formatMoney } from "@/helpers";

// Icons
import { FiEdit2 } from "react-icons/fi";
import { BsTrash3 } from "react-icons/bs";

const DetailsProduct = ({ product }) => {
  const { handleEditQuantity, handleDeleteProduct } = useWebFood();

  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Image product ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>
      <div className="md:w-4/6">
        <p className="text-3xl font-bold">{product.name}</p>
        <p className="mt-2 text-xl font-bold">Cantidad: {product.quantity}</p>
        <p className="mt-2 text-xl font-bold text-amber-500">
          Precio: {formatMoney(product.price)}
        </p>
        <p className="mt-2 text-sm text-gray-700 ">
          Subtotal: {formatMoney(product.price * product.quantity)}
        </p>
      </div>
      <div className="md:2-1/6">
        <button
          type="button"
          className="bg-sky-700 flex px-5 gap-2 items-center py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
          onClick={() => handleEditQuantity(product.id)}
        >
          <FiEdit2 />
          Editar
        </button>
        <button
          type="button"
          className="bg-red-700 flex gap-2 px-5 py-2 items-center text-white rounded-md font-bold uppercase shadow-md w-full mt-3"
          onClick={() => handleDeleteProduct(product.id)}
        >
          <BsTrash3 />
          Eliminar
        </button>
      </div>
    </div>
  );
};

export { DetailsProduct };
