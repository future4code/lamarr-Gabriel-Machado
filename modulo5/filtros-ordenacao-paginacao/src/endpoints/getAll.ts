import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}

export const getAll = async(req: Request,res: Response): Promise<void> =>{
   try {

    let name = req.query.name as string
    let type = req.query.type as string
    let order = req.query.order as string
    let sort = req.query.sortBy as string
    let page = Number(req.query.page) || 1
    let size = Number(req.query.size) || 5

    if(!name){
         name = "%"
    }

    if(!type){
        type = "%"
    }

    if (sort !== 'type' && sort !== 'name') {
        sort = 'email'
    }

    if (!order || (order.toUpperCase() !== 'ASC' && order.toUpperCase() !== 'DESC')) {
        order = 'desc'
    }

    // if (order && order.toUpperCase() !== 'ASC' && order.toUpperCase() !== 'DESC') {
    //     order = 'email'
    // }

      const users = await connection("aula48_exercicio")
      .select("*")
        .where("name", "LIKE", `%${name}%`)
        .andWhere("type", "LIKE", `%${type}%`)
        .orderBy(sort, order)
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