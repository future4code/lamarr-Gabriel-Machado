import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import * as myRoute from '../components/Coodinator'
import { useProtected } from '../hooks/useProtected'

export const TripDetails = () => {

  const [trip, setTrip] = useState({})

  useProtected()
  const navigate = useNavigate()
  const params = useParams()

  const headers = {
    headers: { auth: localStorage.getItem('token') }
  }

  const getTripDetails = () => {
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trip/${params.id}`

    axios
      .get(URL, headers)
      .then(response => {
        setTrip(response.data.trip)
      })
      .catch(err => {
        alert(err.response.data.message)
      })
  }

  useEffect(() => {
    getTripDetails()
  }, [trip])

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
