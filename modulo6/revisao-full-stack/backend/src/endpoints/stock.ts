import { Request, Response } from "express";
import connection from "../database/connections";
export const getStock =async (req: Request, res: Response) => {
    let errorCode = 400;
    try{
        const stock = await connection.select('name',"qty_stock").from('Case_Products');

        res.status(200).send(stock)

    }catch(error:any){
        res.status(errorCode).send({message:error.message});
    }
}