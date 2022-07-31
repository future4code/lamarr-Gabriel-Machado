import React, { useState, useEffect } from "react";
import axios from "axios";
import {baseURL} from '../constants/index';

export const ListUsuarios = () => {
  const [cadastros, setCadastros] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const myHeader = {
    headers: {
      Authorization: "gabriel-machado-lamarr",
    },
  };

  const getAllUsers = () => {
    axios
      .get(`${baseURL}`, myHeader)
      .then((response) => {
        setCadastros(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });

      if(filteredUsers){
        setFilteredUsers(!filteredUsers);
      }
  };

  const searchUsers = () => {
    axios
      .get(`${baseURL}/search?name=${search}&email=`, myHeader)
      .then((response) => {
        setCadastros(response.data);
        setFilteredUsers(!filteredUsers);
        setSearch("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const delcadastro = (id) => {
      axios
        .delete(`${baseURL}/${id}`, myHeader)
        .then((response) => {
          console.log(response.data);
          alert("Usuário deletado com sucesso");
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao deletar usuário");
        });
  };

  return (
  <div>
      <h1>Lista de Usuários</h1>
      {cadastros.map((item) => {
        return (
          <div key={item.id}>
            <li>{item.name}</li>
            <button onClick={() => delcadastro(item.id)}>deletar usuario</button>
          </div>
        )})}
      <h3>Busca por usuarios:</h3>
      <input placeholder='Busca por usuários'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
      {filteredUsers ? <button onClick={() => getAllUsers()}>Voltar</button> : <button onClick={() =>searchUsers(search)}>Buscar Usuários</button> }
  </div>
  );
};
