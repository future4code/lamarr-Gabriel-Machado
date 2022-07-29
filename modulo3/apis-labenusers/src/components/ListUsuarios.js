import React, { useState, useEffect } from "react";
import axios from "axios";

export const listUsuarios = () => {
  const [cadastros, setCadastros] = useState([]);

  const myHeader = {
    headers: {
      Authorization: "gabriel-machado-lamarr",
    },
  };

  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

  // exibir cadastros
  const exibirCadastros = () => {
    axios
      .get(url, myHeader)
      .then((response) => {
        setCadastros(response.data);
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // get
  const getData = () => {
    axios
      .get(url, myHeader)
      .then((response) => {
        console.log(response.data);
        setCadastros(response.data);
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  const delcadastro = cadastros.map((item) => {
    const del = (e) => {
      e.preventDefault();

      axios
        .delete(url + "/" + item.id, myHeader)
        .then(() => {
          alert("Usuário deletado com sucesso");
          getData();
        })
        .catch(() => {
          alert("Erro ao deletar usuário");
        });
    };
    return (
      <li key={item.id}>
        {item.name} - {item.email}
        <button onClick={del}>Deletar</button>
      </li>
    );
  });

  // const deletarUsu = (id) => {
//   const del = (e) => {
//     e.preventDefault();

//   axios.delete(url + '/' + id, myHeader)
//   .then(() => {
//     alert ('Usuário deletado com sucesso');
//     getData();
//   }).catch(() => {
//     alert ('Erro ao deletar usuário');
//   });
// }}

// const compo = cadastros.map((item) => {
//   return (
//     <li key={item.id}>{item.name} - {item.email} 
//       <button onClick={del}>Deletar</button>
//     </li>
//   )})

  return (
  <div>
    <button onClick={delcadastro}>trocar de tela</button>
      <br/>
      {cadastros.map((nome, index) => {
        return (
          <div key={index}>
            <p>{nome.name}</p>
            <p>{nome.email}</p>
            <button>X</button>
          </div>
        )}
      )}
  </div>
  );
};
