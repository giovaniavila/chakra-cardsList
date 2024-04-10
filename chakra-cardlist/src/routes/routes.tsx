import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddCard from "../pages/AddCard";
import Sidebar from "../components/Sidebar";
import { Grid } from "@chakra-ui/react";

const routes = () => {
  return (
    <BrowserRouter>
      <Grid gridTemplateColumns="15vw 1fr">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCard" element={<AddCard />} />
        </Routes>
      </Grid>
    </BrowserRouter>
  );
};

export default routes;
