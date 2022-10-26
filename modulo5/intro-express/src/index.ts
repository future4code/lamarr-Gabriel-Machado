console.log("Hi there!");

import express, { Request, Response} from 'express'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=> {
    res.send('Deu bom')
})

//1
app.listen(3001,()=>{
    console.log('Servidor executando na porta 3001')
})

//2

type Usuarios = {
    id: number,
    nome: string,
    phone: number,
    email: string,
    website: string
}

//3
const usuarios:Usuarios[] = [
    {
        id: 1,
        nome: "João",
        phone: 123456789,
        email: "joao@gmail.com",
        website: "www.joao.com"
    },
    {
        id: 2,
        nome: "Maria",
        phone: 123456789,
        email: "maria@gmail.com",
        website: "www.maria.com"
    }, 
    {
        id: 3,
        nome: "José",
        phone: 123456789,
        email: "jose@gmail.com",
        website: "www.jose.com"
    }
]

//4
app.get("/usuarios", (req: Request, res: Response) => {
    res.status(200).send(usuarios)
})

//5
type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//6

const posts:Posts[] = [
    {
        id: 1,
        title: "Post 1",
        body: "Body 1",
        userId: 1
    },
    {
        id: 2,
        title: "Post 2",
        body: "Body 2",
        userId: 2
    },
    {
        id: 3,
        title: "Post 3",
        body: "Body 3",
        userId: 3
    }
]

//é melhor cria-la aqui, pois ela é uma variavel local

//7
app.get("/posts", (req: Request, res: Response) => {
    res.status(200).send(posts)
})

//8

app.get("/posts/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const post = posts.find((post) => post.id === id)
    if(post){
        res.status(200).send(post)
    } else {
        res.status(404).send("Post não encontrado")
    }
})
