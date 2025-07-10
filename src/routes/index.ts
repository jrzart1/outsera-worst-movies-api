import { Request, Response, Router } from "express";

import awardsIntervalRouter from "./awardsInterval.router";

const appRouter = Router();

appRouter.get("/healths", (_req: Request, res: Response) => res.json({ success: true }));

appRouter.use("/awards-interval", awardsIntervalRouter);

appRouter.use((_req: Request, res: Response) => {
  return res.sendStatus(404)
});

export { appRouter };
