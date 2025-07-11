import { NextFunction, Request, Response } from "express";
import LowDbService from "../services/lowdb.service";

const dbMW = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const db = new LowDbService();
    await db.convertCsvToJson();    

    /* database instance is being stored on res.locals for further usage */
    res.locals.db = await db.populateData();

    next();
  } catch (error) {
    return res.send(500).json({ message: "Erro ao acessar base de dados" });
  }
};

export default dbMW;
