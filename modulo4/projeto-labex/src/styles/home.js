import styled from "styled-components";
import astronauta from "../images/astronauta.jpg";

export const StyleHome = styled.p`
  background-image: url(${astronauta});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 10rem;
    letter-spacing: 1.5rem;
    font-family: "Abel", sans-serif;
    color: white;
  }

  div {
    display: flex;
    gap: 3rem;
  }

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
