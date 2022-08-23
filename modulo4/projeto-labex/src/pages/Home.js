import React from "react";
import { useNavigate } from "react-router-dom";
import * as myRoute from "../components/Coodinator";
import { StyleHome } from '../styles/home'

const Home = () => {

  const navigate = useNavigate();

  return (
    <StyleHome>
      <p>Labe X</p>
      <div>
        <button
          onClick={() => {
            myRoute.goToLogin(navigate);
          }}
        >
         Administrativo 
        </button>
        <button
          onClick={() => {
            myRoute.goToListTrips(navigate);
          }}
        >
          Ir para Viagens
        </button>
      </div>
    </StyleHome>
  );
};

export default Home;
