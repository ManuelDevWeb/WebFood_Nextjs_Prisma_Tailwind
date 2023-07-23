// Layout
import { Layout } from "@/layout/Layout";

//  Custom hook
import { useWebFood } from "@/hooks/useWebFood";

// Components
import { DetailsProduct } from "@/components/DetailsProduct";

export default function Resumen() {
  const { order } = useWebFood();

  return (
    <Layout pagina={"Resumen"}>
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu Pedido</p>

      {order.length === 0 ? (
        <p className="text-center text-2xl">No hay productos en tu pedido</p>
      ) : (
        order.map((product) => (
          <DetailsProduct key={product.id} product={product} />
        ))
      )}
    </Layout>
  );
}
