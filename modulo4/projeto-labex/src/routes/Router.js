import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import { CreateTrip } from "../pages/CreateTrip";
import { AdminHome } from "../pages/AdminHome";
import { ApplicationForm } from "../pages/ApplicationForm";
import { ListTrips } from "../pages/ListTrips";
import { Login } from "../pages/Login";
import { TripDetails } from "../pages/TripDetails";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trips/list" element={<ListTrips/>} />
        <Route path="/trips/application" element={<ApplicationForm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin/trips/list" element={<AdminHome/>} />
        <Route path="/admin/trips/:id" element={<TripDetails/>} />
        <Route path="/admin/trips/create" element={<CreateTrip/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rotas;
