import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../components/Coodinator'

export const AdminHome = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>Painel administrativo</h1>

      <button onClick={() => myRoute.goToBack(navigate)}>voltar</button>
      <button onClick={() => myRoute.goToCreateTrip(navigate)}>criar viagens</button>
      <button>logout</button>

      <button onClick={() => myRoute.goToTripDetails(navigate)}>
        <p>teste</p> <button>excluir</button>
      </button>

      <button onClick={() => myRoute.goToTripDetails(navigate)}>
        <p>teste 2</p> <button>excluir</button>
      </button>

      <button onClick={() => myRoute.goToTripDetails(navigate)}>
        <p>teste 3</p> <button>excluir</button>
      </button>

    </div>
  )
}
