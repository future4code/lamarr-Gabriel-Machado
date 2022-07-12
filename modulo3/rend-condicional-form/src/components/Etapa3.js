import React from 'react'
import styled from "styled-components";

const Etapa3Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

const Etapa3 = () => {
  return (
    <>
        <Etapa3Container>
            <h1>ETAPA 3 - INFORMAÇÕES </h1>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input></input>
            <p>6. Você fez algum curso complementar??</p>
            <select>
                <option value="">Selecione</option>
                <option value="1">Nenhum</option>
                <option value="2">Curso Técnico</option>
                <option value="3">Curso de Idiomas</option>
            </select>
        </Etapa3Container>
    </>
  )
}

export default Etapa3