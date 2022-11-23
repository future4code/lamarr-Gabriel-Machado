import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {

      let name = req.query.name as string
      let type = req.query.type as string
      let order = req.query.order as string
      let sort = req.query.sortBy as string

      if(!name){
         name = "%"
      }

     if (sort !== 'type' && sort !== 'name') {
         sort = 'email'
     }

     if (order && order.toUpperCase() !== 'ASC' && order.toUpperCase() !== 'DESC') {
         order = 'email'
     }

      const users = await connection("aula48_exercicio")
      .select("*")
      .where("name", "LIKE", `%${name}%`)
      .andWhere("type", "LIKE", `%${type}%`)
      .orderBy(sort, order)

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

// export async function getAllRecipes(
//    req: Request,
//    res: Response
// ): Promise<void> {
//    let statusCode = 400
//    try {
//       let title = req.query.title as string
//       let sort = req.query.sort as string
//       let order = req.query.order as string
//       let size = Number(req.query.size)
//       let page = Number(req.query.page)

//       if (!title) {
//          title = "%"
//       }

//       if (!sort) {
//          sort = "title"
//       }

//       if (sort === "createdAt") {
//          sort = "created_at"
//       }

//       if (sort !== "title" && sort !== "created_at") {
//          sort = "title"
//       }

//       if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
//          order = "ASC"
//       }

//       if (isNaN(size) || size < 1) {
//          size = 10
//       }

//       if (isNaN(page) || page < 1) {
//          page = 1
//       }

//       let offset = size * (page - 1)

//       const result = await connection("aula49_recipes")
//          .where("title", "like", `%${title}%`)
//          .orderBy(sort, order)
//          .limit(size)
//          .offset(offset)


//       if (result.length < 1) {
//          statusCode = 404
//          throw new Error("Nenhuma receita encontrada")
//       }

//       const recipes = result.map(toRecipe)

//       res.status(200).send(recipes)

//    } catch (error: any) {
//       res.status(statusCode).send(error.message)
//    }
// }

// const toRecipe = (input: any): recipe => {
//    return {
//       id: input.id,
//       title: input.title,
//       description: input.description,
//       userId: input.user_id,
//       createdAt: input.created_at
//    }
// }