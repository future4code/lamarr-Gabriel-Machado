import React, { useState }from "react";
import axios from "axios";
import {baseURL} from '../constants/index';

export const CriarCadastros = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const body = {
    "name": name,
    "email": email,
  };

  const myHeader = {
    headers: { 
      Authorization: "gabriel-machado-lamarr"
  }
}

  const criarUser = () => {  
    axios
      .post(`${baseURL}`, body, myHeader)
      .then((response) => {
        console.log(response.data);
        setEmail(response.data);
        setName(response.data);
        alert("Usuário cadastrado com sucesso");
      })
      .catch((err) => {
        alert("Erro ao cadastrar usuário");
        console.log(err);
      })
  }

  return (
    <div>
      <input
        placeholder="nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={criarUser}>Criar Usuário</button>
    </div>
  );
};