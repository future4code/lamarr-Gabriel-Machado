import "./App.css";
import React, {useState} from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

function App() {

  const [state, setState]=useState(1);

  const renderizarEtapa = () => {

    switch (state) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        alert("Ocorreu um erro!");
    }
  };

  const irProximaEtapa = () => {
    setState(state+1);
  };

  return (
    <AppContainer>
      {renderizarEtapa()}
      <br />
      {state < 4 ? (
        <button onClick={irProximaEtapa}>Próxima etapa</button>
      ) : <br/>}

    </AppContainer>
  );
}

export default App;
