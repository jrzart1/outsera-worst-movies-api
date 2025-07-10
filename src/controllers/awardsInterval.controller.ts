import { Request, Response } from "express";

export default class AwardsIntervalController {

  async getIntervals(_: Request, res: Response) {
    try {
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
}