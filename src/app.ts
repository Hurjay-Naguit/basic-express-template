import express from "express";
import type { Express } from "express";

import cors from "cors";

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
app.get("/", (_req, res) => {
  return res.status(200).json({ success: true, message: "Server is running!" });
});

export default app;
