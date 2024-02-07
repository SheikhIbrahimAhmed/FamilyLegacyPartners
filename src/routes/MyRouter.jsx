import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../src/Pages/Home";
import PublicLayoutRoutes from "./PublicLayoutRoutes";
import AboutUs from "../Components/AboutUs/AboutUs";
import ReceiptPdf from "../Components/Receipt-Pdf/ReceiptPdf";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayoutRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/receipt-pdf" element={<ReceiptPdf />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRouter;
