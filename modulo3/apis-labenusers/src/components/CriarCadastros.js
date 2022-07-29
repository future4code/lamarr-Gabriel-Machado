import axios from "axios";
import React, { useState } from "react";

const criarCadastros = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //post
  const body = {
    name: name,
    email: email,
  };

  const myHeader = {
    headers: { 
      Authorization: "gabriel-machado-lamarr"
  }}

  
const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';

  const postData = (e) => {
    e.preventDefault();
    axios
      .post(url, body, myHeader)
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        getData();
      })
      .catch(() => {
        alert("Erro ao cadastrar usuário");
      });

    setEmail("");
    setName("");
  };

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
      <button onClick={postData}>Criar Usuário</button>
    </div>
  );
};

export default criarCadastros;