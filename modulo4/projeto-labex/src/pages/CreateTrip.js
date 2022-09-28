import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { createTrip } from '../services/RequestsApi'
import { useProtected } from '../hooks/useProtected'

export const CreateTrip = () => {

  useProtected()
  const navigate = useNavigate()

  const { form, onChange, clear } = useForm({
    name: '',
    description: '',
    data: '',
    duraçãçãodias: '',
  })

  const submitCreateTrip = event => {
    event.preventDefault()
    createTrip(form, clear)
  }

  return (
    <div>
      <h1>criar viagem</h1>
      <form onSubmit={submitCreateTrip}>
      <input
      placeholder='descrição em dias'
      name={'descriçãodias'}
      value={form.descriçãodias}
      onChange={onChange}
      required
      />
      <input
      placeholder='nome'
      name={'name'}
      value={form.name}
      onChange={onChange}
      required
      />
      <input
      placeholder='escolha'
      name={'escolha'}
      value={form.escolha}
      onChange={onChange}
      required
      />
      <input
      placeholder='dd/mm/aaaa'
      name={'data'}
      value={form.data}
      onChange={onChange}
      required
      />
      <input
      placeholder='descrição'
      name={'name'}
      value={form.descrição}
      onChange={onChange}
      required
      />
      <button onClick={() => navigate(-1)}>voltar</button>
      <button 
      type={'submit'}>criar</button>
      </form>
    </div>
  )
}
