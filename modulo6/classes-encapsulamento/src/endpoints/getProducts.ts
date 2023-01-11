import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { ProductDataBase } from "../class/ProductDataBase"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        // const result = await connection(TABLE_PRODUCTS).select()

        const productBD = new ProductDataBase(connection);

        const result = await productBD.getProducts();

        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}