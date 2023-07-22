import { Router } from "express";
import { googleRouter } from "./oauth/google.js";
import { facebookRouter } from "./oauth/facebook.js";
import { authRouter } from "./auth.js";

export const router = Router();

router.use("/google", googleRouter);
router.use("/facebook", facebookRouter);
router.use("/", authRouter);
