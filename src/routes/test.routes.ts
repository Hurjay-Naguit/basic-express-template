import { Router } from "express";
import { testServer } from "../controllers/test.controller.js";

const router: Router = Router();

router.get("/", testServer);

export default router;
