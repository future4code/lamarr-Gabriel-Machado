import React from "react";
import styled from "styled-components";

const Etapa1Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

const Etapa1 = () => {
  return (
    <>
      <Etapa1Container>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual a sua idade?</p>
        <input></input>
        <p>3. Qual o seu email?</p>
        <input></input>
        <p>4. Qual a sua escolaridade?</p>
        <select>
            <option value="">Selecione</option>
            <option value="1">Ensino médio Incompleto</option>
            <option value="2">Ensino médio</option>
            <option value="3">Ensino superior Incompleto</option>
            <option value="3">Ensino superior</option>

        </select>
      </Etapa1Container>
    </>
  );
};

export default Etapa1;
