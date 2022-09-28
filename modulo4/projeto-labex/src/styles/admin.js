import styled from "styled-components";
import astronauta from "../images/astronauta.jpg";

export const StyleAdmin = styled.p`
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

  p {
    font-size: 10rem;
    letter-spacing: 1.5rem;
    font-family: "Abel", sans-serif;
    color: white;
  }

  h1 {
    margin-left: 2rem;
    margin-bottom: 2rem;
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
    font-family: "Roboto", sans-serif;
    color: white;
  }
`;

export const Conteudo = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 20px;
`;

export const ListViagem = styled.div`
  background-color: #efefef;
  margin: auto;
  max-width: 35rem;
  margin-bottom: 1.5rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  padding: 5px 20px;
  border-radius: 10px;
  font-size: 20px;

  div {
    cursor: pointer;
  }

  button {
    border: none;
  }
  img {
    width: 4vh;
  }
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
