import React from "react";
import Navbar from '../Components/shared/Navbar/Navbar'
import Header from "../Components/shared/Header/Header";

const Layout = ({ children }) => {

  return (
    <>    
    <Header/>

      <Navbar />
      <main className='mt-4'>
        {children}
      </main>

    </>
  );
};

export default Layout;
