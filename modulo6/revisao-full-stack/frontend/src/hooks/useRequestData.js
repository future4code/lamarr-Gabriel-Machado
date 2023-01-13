import { useState, useEffect } from "react"
import axios from "axios"

export const useRequestData = (url, headers) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [up,setUp]=useState(false)

  useEffect(() => {
    console.log("foi !!!")
    setIsLoading(true)
    axios
      .get(url, headers)
      .then((res) => {
          setData(res.data)
          setIsLoading(false)
      }).catch((err) => {
        setError(err);
        setIsLoading(false)
      })
  }, [headers, up, url])

  return [data, isLoading, error,up,setUp]
}