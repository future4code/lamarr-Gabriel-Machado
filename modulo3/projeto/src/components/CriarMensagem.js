import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MessagesContainer = styled.div`
  background-color: white;
  background-image: url(https://i.pinimg.com/564x/a7/4d/bd/a74dbd931dbb9a41f5d3bf45e8394927.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 35vw;
  height: 90vh;
  margin-top: 19px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 10px;
  border: 1px solid lightgray;
`;
const Container = styled.div`
  width: 45vw;
  height: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const InputUsuario = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 3px 8px;
  width: 80px;
`;
const InputMensagem = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 3px 0px 3px 3px;
  flex-grow: 1;
`;
const MandarMensagem = styled.button`
  background-color: #00bcd4;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
const Mensagem = styled.p`
  background-color: #00bcd4;
  margin: 3px;
  width: 50%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid lightgray;
`;

const CriarMensagem = () => {
  
  // estados
  const [inputUser, setInputUser] = useState('');
  const [inputMensagem, setInputMensagem] = useState('');
  const [mensagem, setMensagem] = useState([]);

  // eventos
  const handleInputUser = (e) => {
    setInputUser(e.target.value);
  };
  const handleInputMessage = (e) => {
    setInputMensagem(e.target.value);
  };

  // adc mensagem
  const mandarMensagem = (e) => {
    e.preventDefault();
    
      const novaMensagem = 
      { user: inputUser, 
      mensagem: inputMensagem };

      const novaArray = [...mensagem, novaMensagem];

      setMensagem(novaArray);
      
      setInputMensagem('')
      setInputUser('')
  };

  const mensagemGerada = mensagem.map((evento, index) => {
    return (
      <div key={index}>
        <strong>{evento.user}: </strong>
        {evento.mensagem}
      </div> 
    )
  })

  return (
    <div>
      <MainContainer>  
        <MessagesContainer>
          <Mensagem>
            {mensagemGerada}
          </Mensagem>
        </MessagesContainer>
        <Container>
          <InputUsuario
            placeholder="Usuário"
            onChange={handleInputUser}
            value={inputUser}
          />
          <InputMensagem
            placeholder="Mensagem"
            onChange={handleInputMessage}
            value={inputMensagem}
          />

          <MandarMensagem onClick={mandarMensagem}>
            Enviar
          </MandarMensagem>

        </Container>
      </MainContainer>
    </div>
  );
};

export default CriarMensagem;
