import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import { CreateTrip } from "./CreateTrip";
import { AdminHome } from "./AdminHome";
import { ApplicationForm } from "./ApplicationForm";
import { ListTrips } from "./ListTrips";
import { Login } from "./Login";
import { TripDetails } from "./TripDetails";

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
