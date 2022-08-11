import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../components/Coodinator'

export const CreateTrip = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>criar viagem</h1>

      <input
      placeholder='descrição em dias'
      />
      <input
      placeholder='nome'
      />
      <input
      placeholder='escolha'
      />
      <input
      placeholder='dd/mm/aaaa'
      />
      <input
      placeholder='descrição'
      />
      <button onClick={() => myRoute.goToBack(navigate)}>voltar</button>
      <button>criar</button>
    </div>
  )
}
