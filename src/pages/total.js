import { useEffect, useCallback } from "react";

// Layout
import { Layout } from "@/layout/Layout";

// Custom hook
import { useWebFood } from "@/hooks/useWebFood";

// Helpers
import { formatMoney } from "@/helpers";

export default function Total() {
  const { order, name, setName, total, saveOrder } = useWebFood();

  // This function is only executed when order change
  const validateOrder = useCallback(() => {
    return order.length === 0 || name === "" || name.length < 3;
  }, [order, name]);

  useEffect(() => {
    validateOrder();
  }, [order, validateOrder]);

  return (
    <Layout pagina="Datos y Total">
      <h1 className="text-4xl font-black">Datos y Total</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a continuacion</p>

      <form onSubmit={saveOrder}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar {""}{" "}
            <span className="font-bold">{formatMoney(total)}</span>{" "}
          </p>
        </div>
        <div className="mt-5">
          <input
            className={`${
              validateOrder()
                ? "bg-gray-400"
                : "bg-indigo-600 hover:bg-indigo-800"
            }   w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white`}
            value="Confirmar Pedido"
            type="submit"
            disabled={validateOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
