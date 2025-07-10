import { Request, Response, Router } from "express";
import { AwardsIntervalController } from "../controllers";

const awardsIntervalRouter = Router();
const awardsIntervalController = new AwardsIntervalController();

awardsIntervalRouter.get("/", async (req: Request, res: Response) => awardsIntervalController.getIntervals(req, res));

export default awardsIntervalRouter;
