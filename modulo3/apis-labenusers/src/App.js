import React from 'react';
import './App.css';
import CriarCadastros from './components/CriarCadastros';
import { ListUsuarios } from './components/ListUsuarios';

function App() {
  return (
    <div>
      <CriarCadastros/>
      <ListUsuarios/>
    </div>
  );
}

export default App;
