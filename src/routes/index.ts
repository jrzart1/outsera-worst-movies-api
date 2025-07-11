import { Request, Response, Router } from "express";

import awardsIntervalRouter from "./awardsInterval.router";

import dbMW from "../middlewares/db.middleware";

const appRouter = Router();

appRouter.get("/healths", (_req: Request, res: Response) => res.json({ success: true }));

appRouter.use("/awards-interval", dbMW, awardsIntervalRouter);

appRouter.use((_req: Request, res: Response) => {
  return res.sendStatus(404)
});

export { appRouter };
