import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <main className="mt-4">{children}</main>
    </>
  );
};

export default Layout;
