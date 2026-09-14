import { Router } from "express";
import { testServer } from "./tests.controller.js";

const router: Router = Router();

router.get("/", testServer);

export default router;
