import Head from "next/head";

// Modal
import Modal from "react-modal";
// Toastify
import { ToastContainer } from "react-toastify";

// Custom hook
import { useWebFood } from "@/hooks/useWebFood";

// Components
import { Sidebar } from "@/components/Sidebar";
import { Loader } from "@/components/Loader";
import { ModalProduct } from "@/components/ModalProduct";
import { Steps } from "@/components/Steps";

import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

const Layout = ({ children, pagina }) => {
  const { loading, modal } = useWebFood();

  return (
    <>
      <Head>
        <title>Dessert Coffe House - {pagina}</title>
        <meta name="description" content="Dessert Coffe" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          {loading ? (
            <Loader />
          ) : (
            <div className="p-10 pt-10">
              <Steps />
              {children}
            </div>
          )}
        </main>
      </div>

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProduct />
        </Modal>
      )}

      <ToastContainer />
    </>
  );
};

export { Layout };
