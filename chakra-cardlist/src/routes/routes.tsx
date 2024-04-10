import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sidebar from "../components/Sidebar";
import AddCard from "../pages/AddCard";

const routes = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddCard" element={<AddCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
