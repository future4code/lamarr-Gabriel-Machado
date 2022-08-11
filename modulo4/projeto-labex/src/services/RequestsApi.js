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