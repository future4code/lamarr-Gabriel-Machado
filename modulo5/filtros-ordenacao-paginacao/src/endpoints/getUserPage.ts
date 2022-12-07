import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

export const getUserPage = async(req: Request,res: Response): Promise<void> =>{
    try {

        let page = Number(req.query.page) || 1
        let size = Number(req.query.size) || 5

       const users = await connection("aula48_exercicio")
         .select("*")
            .limit(size)
            .offset((page - 1) * size)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No user found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 //       const result = await connection("aula49_recipes")
//          .where("title", "like", `%${title}%`)
//          .orderBy(sort, order)
//          .limit(size)
//          .offset(offset)