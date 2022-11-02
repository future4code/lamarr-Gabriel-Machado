import { produtos } from './data'
import { Produtos } from './type'
import  express, { Request, Response} from 'express'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//1
app.get("/teste", (req: Request, res: Response) => {
    res.send("Olá, sou o teste")
})

//2 - ok
//3 - ok

//4
app.post("/produtos", (req: Request, res: Response) => {
    
    const { name, price } = req.body
    
    try {

        let nameSelected

        if (!name){
            const erro=new Error("O nome não foi informado!");
            erro.name="dataNameNotFound";
            throw erro;
        } else {
            nameSelected = produtos.find((produto) => produto.name === name)
            if (nameSelected) {
                const erro=new Error("O nome já existe!");
                erro.name="dataNameAlreadyExists";
                throw erro;
            }}
        if (!price){
            const erro=new Error("O preço não foi informado!");
            erro.name="dataPriceNotFound";
            throw erro;
        }

        if(typeof price !== "number"){
            const erro=new Error("O preço deve ser um número!");
            erro.name="dataPriceNotNumber";
            throw erro;
        } 

    const novoProduto:Produtos = {
        id: Date.now().toString(),
        name,
        price
    }
        produtos.push(novoProduto)
    
    res.status(201).send(produtos)
    
    } catch (e:any) {
        if (e.name === "dataNameNotFound") {
            res.status(422).send({message: e.message})
        } else if (e.name === "dataPriceNotFound") {
            res.status(422).send({message: e.message})

        } else if (e.name === "dataPriceNotNumber") {
            res.status(401).send({message: e.message})
        }
        else if (e.name === "dataNameAlreadyExists") {
            res.status(409).send({message: e.message})
        }
        else {
            res.status(500).send({message: e.message})
        }

    }
})

//5
app.get("/todosprodutos", (req: Request, res: Response) => {
    res.status(200).send(produtos)
})

//6
app.put("/editarprice/:id", (req: Request, res: Response) => {

    const id = req.params.id
    const { price } = req.body
    
    try { 
        if (!price){
            const erro=new Error("O preço não foi informado!");
            erro.name="dataPriceNotFound";
            throw erro;
        }

        if (typeof price !== "number"){
            const erro=new Error("O preço deve ser um número!");
            erro.name="dataPriceNotNumber";
            throw erro;
        }

    const editarprice = produtos.map((produto) => {
        if (produto.id === id) {
            produto.price = price
        }
        return produto
    }
    )

    res.status(200).send(editarprice)

    } catch (e:any) {
        if (e.name === "dataPriceNotFound") {
            res.status(422).send({message: e.message})
        } else if (e.name === "dataPriceNotNumber") {
            res.status(422).send({message: e.message})
        } else {
            res.status(500).send({message: e.message})
        }
    }   
})

//7
app.delete("/deletarproduto/:id", (req: Request, res: Response) => {
    const id = req.params.id

    try {
        if (!id){
            const erro=new Error("O id não foi informado!");
            erro.name="dataIdNotFound";
            throw erro;
        }
    const produto:Produtos | undefined = produtos.find((produto) => produto.id === id)

    if (produto) {
        const index = produtos.indexOf(produto)
        produtos.splice(index, 1)
        res.status(200).send(produtos)
    } else {
        res.status(404).send("Produto não encontrado")
    }

    } catch (e:any) {
        if (e.name === "dataIdNotFound") {
            res.status(422).send({message: e.message})
        } else {
            res.status(500).send({message: e.message})
        }
    }

})

// -------------------PORTA PARA VERIFICAR O SERVIDOR-------------

app.listen(3003,()=>{
    console.log('Servidor executando na porta 3003')
})