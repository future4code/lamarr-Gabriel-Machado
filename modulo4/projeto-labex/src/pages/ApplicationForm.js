import React, { useState  } from 'react'
import { useGetTrips, applyToTrips } from '../services/RequestsApi'
import { useNavigate } from 'react-router-dom'

export const ApplicationForm = () => {

  const [data, setData] = useState('')
  
  const navigate = useNavigate()
  const trips = useGetTrips()

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      
      <form>
        <select>
          <option>Escolha uma Viagem</option>
          {trips.map(trip => {
            return (
              <option key={trip.id}>
                {trip.name}
              </option>
            )
          })}
        </select>
        <input
          placeholder={'Nome'}
          value={data.name}
        />
        <input
          placeholder={'Idade'}
          type={'number'}
          value={data.age}
        />
        <input
          placeholder={'Texto de Candidatura'}
          value={data.applicationText}
        />
        <input
          placeholder={'Profissão'}
          value={data.profession}
        />
        <select value={data.country}>        
          <option>Escolha um País</option>
        </select>
      </form>
      <div>
          <button onClick={() => navigate(-1)}>
            Voltar
          </button>
          <button>Enviar</button>
        </div>
    </div>
  )
}
