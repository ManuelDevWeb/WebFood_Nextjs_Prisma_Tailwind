import "@/styles/globals.css";

// Provider to permit the components to access state and functions
import { WebFoodProvider } from "@/context/WebFoodProvider";

export default function App({ Component, pageProps }) {
  return (
    <WebFoodProvider>
      <Component {...pageProps} />
    </WebFoodProvider>
  );
}
