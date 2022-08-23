import { useNavigate } from 'react-router-dom'
import { useRequestData } from '../hooks/useRequestData'
import { baseURL } from '../services/api'

export const ListTrips = () => {

  const navigate = useNavigate()
  
  const trips = useRequestData(`${baseURL}trips`)


  const mapear = trips.map(trips => {
    return (
      <div key={trips.id}>
        <p>{trips.name}</p>
        <button onClick={() => navigate(`/admin/trips/${trips.id}`)}>Ver detalhes</button>
      </div>
    )
  })

  return (
    <div>

      <button onClick={()=> navigate(-1)}>voltar</button>

      <button onClick={() => navigate('/trips/application')}>inscreva-se</button>
      <h1>lista de viagens</h1>
      {mapear}
    </div>
  )
}


