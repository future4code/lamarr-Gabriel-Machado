import { Request, Response } from "express";
import getAddressInfo from "../services/getAddressInfo";

export default async function buscarCep(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { cep } = req.params;
    const address = await getAddressInfo(cep);

    res.status(200).send(address);
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}