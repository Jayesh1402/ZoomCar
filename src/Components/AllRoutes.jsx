
import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/Homepage";
import { CarsPage } from "../Pages/CarsPage/CarsPage";
const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/carsPage" element={<CarsPage />} />
  </Routes>
  </BrowserRouter>
  )
}

export default AllRoutes