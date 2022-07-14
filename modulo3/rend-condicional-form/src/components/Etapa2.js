import React from 'react'
import styled from 'styled-components'

const Etapa2Container = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: 50px;
`

const Etapa2 = () => {
  return (
    <>
        <Etapa2Container>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <p>5. Qual curso?</p>
            <input></input>
            <p>6. Qual a unidaade de ensino?</p>
            <input></input>
        </Etapa2Container>
    </>
  )
}

export default Etapa2