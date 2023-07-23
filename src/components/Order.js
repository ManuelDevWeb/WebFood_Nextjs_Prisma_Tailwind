import React from "react";
import Image from "next/image";
import axios from "axios";

// Toas
import { toast } from "react-toastify";

// Utils
import { formatMoney } from "@/helpers";

const Order = ({ order }) => {
  const { id, name, total, items } = order;

  const completeOrder = async () => {
    try {
      await axios.post(`/api/orders/${id}`);
      toast.success("Orden Lista");
    } catch (error) {
      toast.error("Hubo un error");
    }
  };

  return (
    <div className="border p-10 space-y-5 mb-10 bg-gray-50">
      <h3 className="text-2xl font-bold">Orden: {id}</h3>
      <p className="text-lg font-bold">Cliente: {name}</p>

      <div>
        {items.map((item) => (
          <div
            key={item.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${item.image}.jpg`}
                alt={`Image ${item.name}`}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">{item.name}</h4>
              <p className="text-lg font-bold">Cantidad: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          Total a pagar: {formatMoney(total)}
        </p>
        <button
          className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg"
          type="button"
          onClick={completeOrder}
        >
          Completar Order
        </button>
      </div>
    </div>
  );
};

export { Order };
