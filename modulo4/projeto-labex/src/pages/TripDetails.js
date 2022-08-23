import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../components/Coodinator'
import { useProtected } from '../hooks/useProtected'
import { baseURL } from '../services/api'
import { useRequestDat } from '../hooks/useRequestData'
import { useParams } from "react-router-dom";


export const TripDetails = () => {
  useProtected()
  const navigate = useNavigate() 

  const params = useParams();

  const data = useRequestDat(`${baseURL}trip/${params.id}`) 


const TripDetailsCard = () => {
  
    return (
      <div>
        {data && (
          <div>
            <p> Nome: {data.name} </p>
            <p> Descrição: {data.description} </p>
            <p> Planeta: {data.planet} </p>
            <p> Duração: {data.durationInDays} </p>
            <p> Data: {data.date} </p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
        <h1>Viagens</h1>
          <TripDetailsCard />

      <button onClick={() => myRoute.goToBack(navigate)}>voltar</button>
      
      <p>candidatos pendentes...</p>

      <div>
        <p>info sobre os candidatos</p>
        <button>aprovar</button>
        <button>reprovar</button>
      </div>
    </div>
  )
}
