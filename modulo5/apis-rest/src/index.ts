import express,{Request,Response} from 'express'
import {users} from './data'
import cors from 'cors'
import { User, USER_TYPE} from './types'

//------- CONFIG. INICIAIS EXPRESS ----------

const app = express()
app.use(express.json())
app.use(cors())

//1
//a) metodo get
//b) app.get('/users/all', (req: Request, res: Response) => {codigo para pegar todos os usuarios})

app.get('/users/all', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        if(!users.length){
            errorCode = 404
            throw new Error("No users found")
        }
        res.status(200).send(users)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

//2
//a) passando como query
//b) sim, fazendo uma validação

app.get('/users/search', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const type = req.query.type as string

        if (type !== "ADMIN" && type !== "NORMAL") {
            res.statusCode = 422
            throw new Error("Choose between admin or normal.")
        }
        if (!type) {
            return res.status(200).send(users)
        }
        const userFilter = users.filter(user =>
            user.type === type
        )
        if (!userFilter.length) {
            errorCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(userFilter)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

//3
//a) É usado o query ou o path params

app.get('/users/:name', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const name = req.params.name as string

        if (!name) {
            errorCode = 422
            throw new Error("Invalid name")
        }

        const user = users.find(user => user.name === name)

        if (!user) {
            errorCode = 404
            throw new Error("User not found")
        }

        res.status(200).send(user)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

//4
//a) mesmo se mudar para o metodo put, ainda irá continuat criando novos usuarios
//b) não seria apropriado, pois o metodo put é usado para atualizar dados

app.post('/users/create', (req: Request, res: Response) => {
    let errorCode = 400

    try {   
        const { name, email, type, age} = req.body

        if (!name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Invalid data")
        }

        const newUser: User = {
            id: Date.now(),
            name,
            email,
            type,
            age
        }

        if(type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL"){
            errorCode = 402
            throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL ");
        }

        users.push(newUser)

        res.status(200).send(users)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

//------- CONFIG. INICIAIS EXPRESS PORTA ----------

app.listen(3003,()=>{
    console.log('Servidor rodando na porta 3003')
})