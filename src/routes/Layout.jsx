import React from "react";
import Footer from "../Components/Home/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main className="mt-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
