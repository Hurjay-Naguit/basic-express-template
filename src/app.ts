import express from "express";
import type { Express } from "express";

import testRoutes from "./modules/tests/tests.routes.js";

const app: Express = express();

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.use("/api/test", testRoutes);

export default app;
