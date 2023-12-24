import Navbar from "@/sections/Navbar";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sairam Kaushik</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};

export default Layout;
