import styled from "styled-components";
import astronauta from "../images/astronauta.jpg";

export const StyleLogin = styled.p`
  background-image: url(${astronauta});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: relative;
  isolation: isolate;
  display: flex;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(#000, #0a0908, #14213d);
    z-index: -1;
    opacity: 0.4;
  }

  p {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    font-size: 5rem;
    letter-spacing: 0.6rem;
    font-family: "Abel", sans-serif;
    color: black;
  }

  h1 {
    margin-left: 2rem;
    margin-bottom: 2rem;
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
    color: white;
    display: flex;
    justify-content: center;
  }

  div {
    display: -webkit-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    label {
      color: white;
      font-size: 20px;
      margin-left: -45px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 0.5rem;
    max-width: 40rem;
  }

  input {
    border: none;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.74);
    border-radius: 10px;
    font-size: 20px;
    margin-right: 20px;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  gap: 1rem;

  button {
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
  }
`;
