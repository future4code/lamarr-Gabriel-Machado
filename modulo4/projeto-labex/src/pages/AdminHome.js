import React from "react";
import { useNavigate } from "react-router-dom";
import * as myRoute from "../components/Coodinator";
import { useProtected } from "../hooks/useProtected";
import { StyleAdmin, Conteudo, ListViagem, Buttons } from "../styles/admin";
import { deleteTrip } from "../services/RequestsApi";
import { baseURL } from "../services/api";
import { useRequestData } from '../hooks/useRequestData'

export const AdminHome = () => {
  
  useProtected();
  const navigate = useNavigate();
  
  const [data, isLoading] = useRequestData(`${baseURL}trips`)

  console.log(data)


  const logout = () => {    
    navigate('/')
  }

  const viagens = data&&data.trips.map((trip) => {
        return (
          <ListViagem key={trip.id}>
            <div onClick={() => {
                navigate(`/admin/trips/${trip.id}`);
              }}> {trip.name}
            </div>

            <button onClick={() => deleteTrip(trip.id)}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3757/3757041.png"
                alt="Lixeira"
              />
            </button>
          </ListViagem>
        );
      })

  return (
    <StyleAdmin>
      <h1>Painel administrativo</h1>
      <Conteudo>
        <Buttons onClick={() => navigate('/')}>voltar</Buttons>
        <Buttons onClick={() => myRoute.goToCreateTrip(navigate)}>
          criar viagens
        </Buttons>
        <Buttons onClick={logout}>logout</Buttons>
      </Conteudo>
      <div>
        {isLoading&&"Carregando!..."}
        {!isLoading&&data&&data.trips&&viagens}
        {!isLoading&&data&&!data.trips&&"Ops! Algo deu errado!"}</div>
    </StyleAdmin>
  );
};
