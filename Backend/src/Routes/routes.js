import { Router } from "express";

import { signIn } from "../controllers/users/signIn.js";
import { signUp } from "../controllers/users/signUp.js";

import { authMiddleWare } from "../middleware/authMiddeWare.js";

import { model_api } from "../controllers/api.model/api.model.js";
import geminiApi from "../controllers/gemini.api/gemini.api.js";
import displayRecords from "../controllers/Records/records.js";

const router = Router();

// auth route
router.post("/signin", signIn);
router.post("/signup", signUp);

// model route
router.get("/model", authMiddleWare, model_api);
router.post("/gemini", geminiApi);

// display user records
router.post("/records", authMiddleWare, displayRecords);

export { router };
