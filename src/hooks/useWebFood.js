import { useContext } from "react";

// Context to allow access to the context
import { WebFoodContext } from "@/context/WebFoodProvider";

const useWebFood = () => {
  return useContext(WebFoodContext);
};

export { useWebFood };
