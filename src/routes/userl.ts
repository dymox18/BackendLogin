import { Router } from "express";
import { login, register } from "../controllers/userl";


const router = Router();

router.post("/api/userl/register", register),
router.post("/api/userl/login", login)

export default router