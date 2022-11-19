import  express, { Request, Response} from 'express'
import connection from './dataBase/connection'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//a) Criar um endpoint para criar um novo estudante com os seguintes campos: id, nome, email, data_nascimento, hobbies (id, nome, dia_semana, horario, descricao)

//b) 

app.get('/ator', async (req: Request, res: Response) => {

    let errorCode: number = 400

    try {

        const searchActor = req.query.search

        if(searchActor) {
        const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE nome = "${req.query.nome}"
        `)
        res.status(200).send(result[0])
        }
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})
  
  
  app.listen(3003, () => {
    console.log('Server is running in http://localhost:3003')
})

