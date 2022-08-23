import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import axios from "axios";
import { useProtected } from "../hooks/useProtected";
import { StyleLogin, Conteudo } from "../styles/login";
import { baseURL } from '../services/api'

export const Login = () => {
  useProtected();
  const navigate = useNavigate();

  const [ form, onChange, clear ] = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
      if (localStorage.getItem("token")) {
          navigate("/admin/trips/list");
      };
  }, [navigate]);

  const submitLogin = (event) => {
    event.preventDefault();
    axios.post(`${baseURL}login`, form)
      .then((response) => {
        localStorage.setItem("token", 
        response.data.token)
        navigate("/admin/trips/list");
      })
      .catch((error) => console.log(error.response.data));
    clear();
  };

  return (
    <StyleLogin>
      <form onSubmit={submitLogin}>
      <h1>Login</h1>
        <div>
          <input
            id="email"
            placeholder={"E-mail"}
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            id='senha'
            placeholder={"Senha"}
            type={'senha'}
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
          />
        </div>
        <Conteudo>
          <button onClick={() => navigate("/")}>voltar</button>
          <button type="submit">entrar</button>
        </Conteudo>
      </form>
    </StyleLogin>
  );
};
