import "./App.css";
import styled from "styled-components";
import logo from './img/logo.jpg';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  img {
    width: 80px;
  }
`;

export const SideLeft = styled.div`
  background-color: orange;
  width: 20%;
  height: 634px;
`;

export const SideRight = styled.div`
  background-color: orange;
  width: 20%;
  margin-inline-start: auto;
`;

export const Main = styled.div`
  align-self: self-end;
  margin: 20px 10px;
  button {
    font-size: small;
  }
`;

export const Footer = styled.p`
  background-color: grey;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;


function App() {
  return (
    <div>
      <Container>
        <Header>
          <img src={logo}/>
          <h1>LabZap</h1>
        </Header>
        <SideLeft />
        <Main>
          <label>Remetente:</label>
          <input></input>
          <label>Msg:</label>
          <input></input>
          <button>Enviar Mensagem</button>
        </Main>
        <SideRight />
        <Footer>
          Gabriel Alisson 2022 - Todos os direitos reservados - LabZap
        </Footer>
      </Container>
    </div>
  );
}
        
export default App;
