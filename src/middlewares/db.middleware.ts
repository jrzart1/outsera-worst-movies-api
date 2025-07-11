import { NextFunction, Request, Response } from "express";
import LowDbService from "../services/lowdb.service";

const dbMW = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const dbService = new LowDbService();
    await dbService.convertCsvToJson();    

    /* database instance is being stored on res.locals for further usage */
    res.locals.db = await dbService.populateData();

    next();
  } catch (error) {
    return res.send(500).json({ message: "Erro ao acessar base de dados" });
  }
};

export default dbMW;
