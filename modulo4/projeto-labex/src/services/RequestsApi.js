import axios from "axios";

// aplicar para uma viagem.
export const applyToTrips = (data, baseURL) => {
  const url = `${baseURL}/trips/${data.trip}/apply`;

  const body = {
    name: data.name,
    age: data.age,
    applicationText: data.applicationText,
    profession: data.profession,
    country: data.country,
  };

  axios
    .post(url, body)
    .then((res) => {
      alert("Inscrição realizada com sucesso");
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// cria uma nova viagem.
export const createTrip = (body, clear, baseURL) => {
  const URL = `${baseURL}trips/`;
  
  const headers = {
    headers: { auth: localStorage.getItem("token") },
  };

  axios
    .post(URL, body, headers)
    .then(() => {
      alert("Viagem adicionada com sucesso!");
      clear();
    })
    .catch((err) => console.log(err));
};

// Endpoint que deleta uma viagem
export const deleteTrip = (id, baseURL) => {
  const URL = `${baseURL}trips/${id}`;
  const headers = {
    headers: { auth: localStorage.getItem("token") },
  };

  axios
    .delete(URL, headers)
    .then(() => {
      window.confirm("Deseja realmente excluir essa viagem?");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
