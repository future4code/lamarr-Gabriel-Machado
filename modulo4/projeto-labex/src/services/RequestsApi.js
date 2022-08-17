import { useEffect, useState } from "react";
import axios from "axios";

export const useGetTrips = () => {
    const [trips, setTrips] = useState([])

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips'

    useEffect(() => {
        axios.get(url)
        .then(res => {
          setTrips(res.data.trips);
        }).catch(err => {
          console.log(err)
        })
      } , [])

    return trips
}

// aplicar para uma viagem.
export const applyToTrips = (data) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/aluno/trips/${data.trip}/apply`

    const body = {
        name: data.name,
        age: data.age,
        applicationText: data.applicationText,
        profession: data.profession,
        country: data.country
    }
    
    axios.post(url, body)
    .then(res => {
        alert('Inscrição realizada com sucesso')
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    } )
}

// cria uma nova viagem.
export const createTrip = (body, clear) => {
  const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-machado-lamarr/trips/'
  const headers = {
    headers: { auth: localStorage.getItem('token') }
  }

  axios
    .post(URL, body, headers)
    .then(() => {
      alert('Viagem adicionada com sucesso!')
      clear()
    })
    .catch(err => console.log(err))
}