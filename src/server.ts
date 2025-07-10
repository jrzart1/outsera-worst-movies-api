import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { appRouter } from "./routes";

const SERVER_PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(helmet());
app.use(morgan("common"));
app.use(appRouter);

app.listen(SERVER_PORT, async () => {
  try {
    console.log(`Service started on port ${SERVER_PORT}`);
  } catch (err) {
    console.log(`Service catch error`);
  }
});
