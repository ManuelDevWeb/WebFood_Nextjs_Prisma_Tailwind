import Head from "next/head";
import Image from "next/image";

// Toastify
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Dessert Coffe House - {pagina}</title>
        <meta name="description" content="Dessert Coffe" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Image
            width={300}
            height={100}
            src="/assets/img/logo.jpg"
            alt="imagen logotipo"
            className="mx-auto"
          />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}
