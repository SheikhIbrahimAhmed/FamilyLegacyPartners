import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from  '../../src/Pages/Home';
import PublicLayoutRoutes from "./PublicLayoutRoutes";

const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayoutRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRouter;
