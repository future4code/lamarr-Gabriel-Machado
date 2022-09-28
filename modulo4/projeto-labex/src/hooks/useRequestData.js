import { useEffect, useState } from "react";
import axios from 'axios';

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(undefined);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
      axios.get(url).then((response) => {
        setIsLoading(false);
        setData(response.data);
        }).catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, []);

    return [data, isLoading, error];
  };
  
//tripsdetails

const headers = {
  headers: { auth: localStorage.getItem("token") },
};

export const useRequestDat = (url) => {
    const [data, setData] = useState(undefined);
    
    useEffect(() => {
      axios.get(url, headers)
      .then((response) => {
          setData(response.data.trip)
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }, [url]);
    return data;
  };