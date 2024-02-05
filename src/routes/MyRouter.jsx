import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../src/Pages/Home";
import PublicLayoutRoutes from "./PublicLayoutRoutes";
import AboutUs from "../Components/AboutUs/AboutUs";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayoutRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRouter;
