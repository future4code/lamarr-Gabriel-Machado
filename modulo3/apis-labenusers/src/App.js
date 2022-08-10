import React, { useState } from "react";
import { CriarCadastros } from "./components/CriarCadastros";
import { ListUsuarios } from "./components/ListUsuarios";

const App = () => {
  const [screen, setScreen] = useState("criar");

  const changeScreen = () => {
    setScreen(screen === "criar" ? "list" : "criar");
  };

  return (
    <div>
      <button onClick={changeScreen}>Trocar de tela</button>
      {screen === "criar" ? <CriarCadastros /> : <ListUsuarios />}
    </div>
  );
};

export default App;
