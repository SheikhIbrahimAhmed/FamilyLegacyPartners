import React from "react";
import Navbar from "../Components/shared/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mt-4">{children}</main>
    </>
  );
};

export default Layout;
