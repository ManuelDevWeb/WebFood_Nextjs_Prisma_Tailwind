import axios from "axios";

// useSWR
import useSWR from "swr";

// Layout Admin
import { AdminLayout } from "@/layout/AdminLayout";

// Components
import { Order } from "@/components/Order";

export default function Admin() {
  // Fetcher es la forma en la que se conecta a la API
  const fetcher = async () => {
    const res = await axios.get("/api/orders");
    return res.data;
  };

  const { data, error, isLoading } = useSWR("/api/orders", fetcher, {
    // Hace refresh cada 0.1 seg
    refreshInterval: 100,
  });

  return (
    <AdminLayout pagina={`Admin page`}>
      <h1 className="text-4xl font-black">Pandel de Administracion</h1>
      <p className="text-2xl my-10">Administra tus Ordenes</p>
      {data && data.length ? (
        data.map((order) => <Order key={order.id} order={order} />)
      ) : (
        <p>No hay ordenes pendientes</p>
      )}
    </AdminLayout>
  );
}
