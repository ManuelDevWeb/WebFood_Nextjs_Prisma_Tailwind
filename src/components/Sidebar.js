import Image from "next/image";

// Custom hook
import { useWebFood } from "@/hooks/useWebFood";

// Components
import { Category } from "./Category";

const Sidebar = () => {
  // Get categories from custom hook with the access to the Context
  const { categories } = useWebFood();

  return (
    <>
      <Image
        width={300}
        height={100}
        src={"/assets/img/logo.jpg"}
        alt="Img logo"
        className="mx-auto"
      />

      <nav className="mt-10">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </nav>
    </>
  );
};

export { Sidebar };
