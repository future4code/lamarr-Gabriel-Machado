import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../components/Coodinator'

export const TripDetails = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>informações da viagem</h1>

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
