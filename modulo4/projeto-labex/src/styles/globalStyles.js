import styled from "styled-components";
import astronauta from "../images/astronauta.jpg";

export const Container = styled.div`
  background-image: url(${astronauta});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(#000, #0a0908, #14213d);
    z-index: -1;
    opacity: 0.4;
  }
`;

export const Conteudo = styled.div`
    display: flex;
    justify-content:  space-evenly;
    align-items: center;
`;


export const ListaDeViagens = styled.div`
  background-color: rgba(255, 255, 255, 0.74);
  margin: auto;
  max-width: 35rem;
  margin-bottom: 2rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  padding: 5px 20px;
  border-radius: 10px;
`;

export const Buttons = styled.button`
  padding: 10px 25px;
  color: white;
  background-color: #b2366c8c;
  border: 1px solid white;
  border-radius: 50px;
  font-size: 1.5rem;
  text-transform: capitalize;
  letter-spacing: 0.2rem;
  margin-top: 20px;
  transition: 0.1s ease;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #b2366c;
  }
`;

export const Textoh1 = styled.h1`
  margin-left: 2rem;
  margin-bottom: 2rem;
  font-size: 3.5rem;
  letter-spacing: 0.2rem;
  font-family: "Roboto", sans-serif;
  color: white;
`;

