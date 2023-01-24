import { getStock } from './endpoints/stock';
import { createOrder } from './endpoints/createOrder';
import { getAllProducts } from './endpoints/allProducts';
import { getAllClients } from './endpoints/allClients';
import { createClient } from './endpoints/createClient';
import { ping } from './endpoints/ping';
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003,() => {
    console.log("Servidor rodando na porta 3003");
    
})

app.get("/ping",ping );

//retorna dados dos clientes
app.get("/clients",getAllClients);
//retorna dados dos produtos
app.get("/products",getAllProducts);
//retorna estoque
app.get("/stock",getStock);



//retorna dados dos produtos
app.post("/order",createOrder);
//add client
app.post("/client",createClient);
