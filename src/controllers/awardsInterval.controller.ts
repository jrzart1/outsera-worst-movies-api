import { Request, Response } from "express";
import AwardsIntervalModel from "../models/awardsInterval.model";

export default class AwardsIntervalController {

  async getIntervals(_: Request, res: Response) {
    try {
      const { db } = res.locals;

      const model = new AwardsIntervalModel();
      const response = model.calculate(db);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
}