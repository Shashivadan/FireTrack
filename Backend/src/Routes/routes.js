import { Router } from "express";

import { signIn } from "../controllers/users/signIn.js";
import { signUp } from "../controllers/users/signUp.js";

import { authMiddleWare } from "../middleware/authMiddeWare.js";

const router = Router();

// auth
router.post("/signin", signIn);
router.post("/signup", signUp);

router.get("/model", authMiddleWare, (req, res) => {
  res.json({
    userId: req.userId,
  });
});

export { router };
