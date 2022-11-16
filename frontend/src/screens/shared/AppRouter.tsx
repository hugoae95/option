import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Forbidden from "./Forbidden";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Forbidden />} />
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
