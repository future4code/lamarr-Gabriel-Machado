import React from 'react'
import styled from 'styled-components'

const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Final = () => {
  return (
    <>
        <FinalContainer>
            <h1>O FORMULÁRIO ACABOU</h1>
            <p>Obrigado por responder o formulário!</p>
        </FinalContainer>
    </>
  )
}

export default Final