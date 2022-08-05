import {Home} from './components/Home/Home.js';
import React, { useState} from 'react';
import {Match} from './components/Match/Match.js';
import { GlobalStyle } from "./global";
import { Container, CardHome, HeaderCard } from "./styles";

function App() {

  const [screen, setScreen] = useState('start');

  const changeScreen = ()=>{
    switch(screen){
      case"homePage":
      return <Home/>;
      case"matchList":
      return <Match/>;
      default:
        return <Home/>
    }
  }
  const goToHomePage = ()=>{
    setScreen("homePage");
  }
  const goToMatchList = ()=>{
    setScreen("matchList");
  }

  return (
    <Container>
      <CardHome>
        <HeaderCard>
          <img src="https://cdn-icons-png.flaticon.com/512/3884/3884621.png" onClick={goToHomePage} 
          alt="home"
          />
          <h2>ASTROMATCH</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/7361/7361932.png" onClick={goToMatchList}
          alt='match'/>
        </HeaderCard>
        {changeScreen()}
      </CardHome>
      <GlobalStyle/>
    </Container>
  );
};

export default App;
