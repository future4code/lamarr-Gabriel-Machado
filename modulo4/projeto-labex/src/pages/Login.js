import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForms } from '../hooks/useForms'
import axios from 'axios'

export const Login = () => {

  const navigate = useNavigate()

  const { form, onChange, clear } = useForms({
    name: '',
    password: '',
  })

  const submitLogin = event => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }

    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:gabriel-machado-lamarr/login', body)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        navigate('/admin/trips/list')
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.response.data)
      })
    clear()
  }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={submitLogin}>
      <input
      placeholder={'E-mail'}
      type={'email'}
      name={'email'}
      value={form.email}
      onChange={onChange}
      required
      />
      <input
      placeholder={'Senha'}
      type={'password'}
      name={'password'}
      value={form.password}
      onChange={onChange}
      required
      />
      <button onClick={() => navigate(-1)}>voltar</button>
      <button type={'submit'}>entrar</button>
      </form>
    </div>
  )
}
