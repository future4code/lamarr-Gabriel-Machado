import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../components/Coodinator'

export const Login = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>login</h1>
      <input
      type='text'
      placeholder='email'
      />
      <input
      type='password'
      placeholder='senha'
      />
      <button onClick={() => myRoute.goToBack(navigate)}>voltar</button>
      <button onClick={() => myRoute.goToAdminHome(navigate)}>entrar</button>
    </div>
  )
}
