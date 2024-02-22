import { Router } from "express";

import { Home } from "../controllers/Home.js";

const router = Router();

router.get("/home", Home);

export { router };
