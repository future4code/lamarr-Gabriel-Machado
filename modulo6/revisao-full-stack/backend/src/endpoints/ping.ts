import { Request,Response } from "express";

export const ping = async (req: Request, res: Response)=>{
    let errorCode=400
    try {
        res.status(200).send("Pong!");
    }catch (error:any){
        res.status(errorCode).send({message: error.message});
    }
}

export default ping;