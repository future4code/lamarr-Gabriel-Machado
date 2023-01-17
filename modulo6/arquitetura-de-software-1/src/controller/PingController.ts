import { Request, Response } from "express"

export class PingController {
    ping = async (req: Request, res: Response): Promise<void> => {
        let errorCode = 400
        try {
            res.status(200).send({ message: "Pong!" })
          } catch (error: any) {
            res.status(errorCode).send({ message: error.message })
          }
    }
}