import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.imagem} alt="email" />
        <h4>email:</h4>
        <p>{props.email}</p> 
      </div>
      <div className="card">
        <img src={props.imagemlocaliza} alt="localização" />
        <h4>Endereço:</h4>
        <p>{props.endereco}</p>
      </div>
    </div>
  );
}

export default CardPequeno;
