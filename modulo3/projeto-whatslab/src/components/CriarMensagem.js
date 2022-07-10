import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.jpg";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;
const MainContainer = styled.div`
  border-radius: 10px;
  height: 634px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  align-items: flex-end;
  width: 600px;
  background-image: url(https://i.pinimg.com/564x/a7/4d/bd/a74dbd931dbb9a41f5d3bf45e8394927.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: solid;
`;
const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  img {
    width: 80px;
  }
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: block;
  background-color: orange;
`;
const MensagemContainer = styled.div`
  width: 80vh;
  height: 90vh;
  margin-top: 19px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column-reverse;
`;
const InputUsuario = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid;
  margin: 3px 8px;
  width: 80px;
`;
const InputMensagem = styled.input`
  background-color: white;
  border-radius: 5px;
  border: 1px solid;
  margin: 3px 0px 3px 3px;
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
const Footer = styled.p`
  background-color: grey;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
const EscreverMensagem = styled.div`
  margin-bottom: 10px;
  align-self: center;
`;
const Mensagem = styled.p`
  background-color: white;
  margin: 3px;
  width: 30%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid lightgray;
`;
const MinhaMensagem = styled.div`
  align-self: flex-end;
  background-color: #dcf8c6;
  margin: 10px;
  padding: 12px 15px;
  text-align: left;
  width: 30%;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

const CriarMensagem = () => {
  // estados
  const [inputUser, setInputUser] = useState("");
  const [inputMensagem, setInputMensagem] = useState("");
  const [mensagem, setMensagem] = useState([]);

  // eventos
  const handleInputUser = (e) => {
    setInputUser(e.target.value);
  };
  const handleInputMessage = (e) => {
    setInputMensagem(e.target.value);
  };

  // mandar msg com enter
  const mandarMensagemEnter = (e) => {
    if (e.key === "Enter") {
      return mandarMensagem(e);
    }
  };

  // adc mensagem
  const mandarMensagem = (e) => {
    e.preventDefault();
    if (inputUser !== "" && inputMensagem !== "") {
      setMensagem([{ user: inputUser, mensagem: inputMensagem }, ...mensagem]);

      // const novaMensagem = { user: inputUser, mensagem: inputMensagem };
      // const novaArray = [novaMensagem, ...mensagem];
      // setMensagem(novaArray);

      setInputMensagem("");
      setInputUser("");
    } else {
      alert("Preencha todos os campos");
    }
  };

  // mensagem na tela
  const mensagemGerada = mensagem.map((evento, index) => {

    const deletarMensagem = () => {
      const novasMensagens = [...mensagem];
      const deletar = novasMensagens.findIndex((mensagemExcluida) => {
        return mensagemExcluida === evento;
      });
      
      novasMensagens.splice(deletar, 1);
      setMensagem(novasMensagens);
    }

    if (evento.user === "eu") {
      return (
        <MinhaMensagem key={index} onDoubleClick={deletarMensagem}>
          {evento.mensagem}
        </MinhaMensagem>
      );
    } else {
      return (
        <Mensagem key={index} onDoubleClick={deletarMensagem}>
          <strong>{evento.user}</strong>
          <br />
          {evento.mensagem}
        </Mensagem>
      );
    }
  });

  return (
    <div>
      <Container>
        <Header>
          <img src={logo} alt="logo" />
          <h1>WhatsLab</h1>
        </Header>

        <Main>
          <MainContainer>
            <MensagemContainer>{mensagemGerada}</MensagemContainer>
            <EscreverMensagem onKeyPress={mandarMensagemEnter}>
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
              <MandarMensagem onClick={mandarMensagem} type="submit">
                Enviar
              </MandarMensagem>
            </EscreverMensagem>
          </MainContainer>
        </Main>

        <Footer>
          Gabriel Alisson 2022 - Todos os direitos reservados - WhatsLab
        </Footer>
      </Container>
    </div>
  );
};

export default CriarMensagem;
