import  express, { Request, Response} from 'express'
import connection from './dataBase/connection'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())


//1
//a) Explique como é a resposta que temos quando usamos o raw. 

// a resposta é um array de objetos, onde cada objeto é uma linha da tabela

//b) Faça uma função que busque um ator pelo nome;

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0][0]
}

//c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor
    WHERE gender = "${ gender }";
    `)
    const count = result[0][0].count
    return count
}

//2
//a) uma função que receba um salario e um id e realiza a atualização do salario do ator em questão.

const updateActorSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
    .update({
        salary: salary
    })
    .where("id", id)
}

//b) uma função que receba um id e delete o ator da tabela.

const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
    .delete()
    .where("id", id)
}

//c) uma função que receba um gender e devolva a média do salario de atrizes ou atores desse gender.

const getAverageSalaryByGender = async ( gender: string): Promise<any> => { 
    const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender })
    return result[0].average
}

//3
//a) crie um endpoint para buscar um ator pelo id

const getActorById = async (id: string): Promise<any> => {
    const result = await connection("Actor")
    .select("*")
    .where("id", id)
    return result[0]
}

app.get("/ator/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const id = req.params.id
        const result = await getActorById(id)
        
        if (!result) {
            errorCode = 404
            throw new Error("Ator não encontrado")
        }
        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//b) b) Crie um endpoint agora com as seguintes especificações:

//- Deve ser um GET (`/actor`)
//- Receber o gênero como um *query param* (`/actor?gender=`)
//- Devolver a quantidade de atores/atrizes desse gênero

app.get("/actor", async (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const count = await countActorsByGender(req.query.gender as string)
        res.status(200).send({
            quantity: count
        })
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//4
//a) crie um endpoint para atualizar o salario com id

app.put("/atualizarator/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        await updateActorSalary(req.body.id, req.body.salary)
        res.status(200).send("Salário atualizado com sucesso")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//b) crie um endpoint para deletar um ator

app.delete("/deletarator/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const id = req.params.id
        await deleteActor(id)
        res.status(200).send("Ator deletado com sucesso")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


//pegar atores
// app.get('/ator', async (req: Request, res: Response) => {

//     let errorCode: number = 400

//     try {

//         const result = await connection.raw(`
//             SELECT * FROM Actor
//         `)
//         res.status(200).send(result[0])
//     } catch (error:any) {
//         res.status(400).send(error.message)
//     }
// })
  
  app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
})

