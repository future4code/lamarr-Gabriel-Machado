import  express, { Request, Response } from 'express'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//1
app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong')
})

//2
type Afazeres = {
    UserId: number,
    id: number,
    title: string,
    completed: boolean
}

//3
const afazeres: Afazeres[] = [
    {
        UserId: 1,
        id: 1,
        title: 'Fazer café',
        completed: false
    },
    {
        UserId: 1,
        id: 2,
        title: 'Estudar',
        completed: false
    },
    {
        UserId: 1,
        id: 3,
        title: 'Lavar a louça',
        completed: true
    }
]

//4

app.get('/afazeres', (req: Request, res: Response) => {
    const allAfazeres = afazeres.filter((afazer) => afazer.completed === true)

    res.status(200).send(allAfazeres)
})

//5

app.post('/adicionar', (req: Request, res: Response) => {
    const { title, completed } = req.body

    if(!title || !completed) {
        res.status(400).send('Deu ruim, passe o title e completed')
    }

    const newAfazer: Afazeres = {
        UserId: 1,
        id: Date.now(),
        title,
        completed
    }
    afazeres.push(newAfazer)
    res.status(200).send(newAfazer)
})

//6
app.put('/atualizar/:id', (req: Request, res: Response) => {
    const id:Number = Number(req.params.id);
    let newCompleted:boolean = req.body.completed
    
    const afazerAtualizado = afazeres.findIndex((i) => i.id === id)

    afazeres[afazerAtualizado].completed = newCompleted

    res.status(200).send(afazeres[afazerAtualizado])

})

//7
app.delete('/deletar/:id', (req: Request, res: Response) => {
    const id:number = Number(req.params.id)

    const afazerDeletado = afazeres.findIndex((i) => i.id === id)

    afazeres.splice(afazerDeletado, 1)
 
    res.status(200).send(afazerDeletado)
 })

 //8
 app.get('/afazeres/:id', (req: Request, res: Response) => {
    const id:number = Number(req.params.id)

    const afazer = afazeres.find((i) => i.id === id)

    res.status(200).send(afazer)
    })

// -------------------PORTA PARA VERIFICAR O SERVIDOR-------------

app.listen(3003,()=>{
    console.log('Servidor executando na porta 3003')
})
