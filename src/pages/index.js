// Import Prisma
import { PrismaClient } from "@prisma/client";

// Layout
import { Layout } from "@/layout/Layout";

// Custom hook
import { useWebFood } from "@/hooks/useWebFood";

// Components
import { Product } from "@/components/Product";

// Props come from getServerSideProps()
export default function Home({ categories }) {
  const { currentCategory } = useWebFood();

  return (
    <Layout pagina={`Menu ${currentCategory?.name}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuacion
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6">
        {currentCategory?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}

// Get data from DB in each request
export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  // Get categories
  const categories = await prisma.category.findMany();

  return {
    props: {
      categories,
    },
  };
};
