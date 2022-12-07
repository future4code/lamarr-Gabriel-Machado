import app from "./app";
import buscarCep from "./endpoints/buscarCep";

app.get("/buscarcep/:cep", buscarCep);
