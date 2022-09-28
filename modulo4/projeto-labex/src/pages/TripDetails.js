import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../components/Coodinator'
import { useProtected } from '../hooks/useProtected'
import { baseURL } from '../services/api'
import { useRequestDat } from '../hooks/useRequestData'
import { useParams } from "react-router-dom";
import { ListaDeViagens, Buttons, Textoh1, Container } from '../styles/globalStyles'


export const TripDetails = () => {
  useProtected()
  const navigate = useNavigate() 

  const params = useParams();

  const data = useRequestDat(`${baseURL}trip/${params.id}`) 


const TripDetailsCard = () => {
  
    return (
      <div>
        {data && (
          <ListaDeViagens>
            <p> Nome: {data.name} </p>
            <p> Descrição: {data.description} </p>
            <p> Planeta: {data.planet} </p>
            <p> Duração: {data.durationInDays} </p>
            <p> Data: {data.date} </p>
          </ListaDeViagens>
        )}
      </div>
    )
  }

  return (
    <Container>
        <Textoh1>Informações da Viagem</Textoh1>
          <TripDetailsCard />

      <Buttons onClick={() => myRoute.goToBack(navigate)}>voltar</Buttons>
      
      {/* <p>candidatos pendentes...</p>

      <div>
        <Textoh1>info sobre os candidatos:</Textoh1>
        <Buttons>aprovar</Buttons>
        <Buttons>reprovar</Buttons>
      </div> */}
    </Container>
  )
}
