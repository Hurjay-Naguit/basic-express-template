import express from "express";
import type { Express } from "express";

import cors from "cors";

import testRoutes from "./routes/test.routes.js";

const app: Express = express();

// MIDDLEWARES
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // client's URL
    credentials: true,
  }),
);

// ROUTES
app.use("/api/test", testRoutes);

export default app;
