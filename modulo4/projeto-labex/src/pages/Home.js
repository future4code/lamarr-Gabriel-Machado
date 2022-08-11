import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../components/Coodinator'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div>Home
      <button onClick={() => {myRoute.goToLogin(navigate)}}>privado</button>
      <button onClick={() => {myRoute.goToListTrips(navigate)}}>publico</button>
    </div>
  )
}

export default Home;
