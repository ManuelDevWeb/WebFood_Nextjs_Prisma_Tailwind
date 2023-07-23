import Image from "next/image";

// Custom hook
import { useWebFood } from "@/hooks/useWebFood";

const Category = ({ category }) => {
  const { name, icon, id } = category;

  const { handleClickCategory, currentCategory } = useWebFood();

  return (
    <div
      className={`${
        currentCategory?.id === id && "bg-[#eeb158]"
      } flex items-center gap-4 w-full border px-16 py-5 hover:bg-[#eeb158] transition-all`}
    >
      <Image
        width={50}
        height={50}
        src={`/assets/img/icono_${icon}.png`}
        alt="Icon category"
        className="mr-5"
      />
      <button
        onClick={() => handleClickCategory(category)}
        type="button"
        className="text-2xl font-bold hover:cursor-pointer font-sans "
      >
        {name}
      </button>
    </div>
  );
};

export { Category };
