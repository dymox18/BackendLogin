import { Router } from "express";
import { register } from "../controllers/userl";


const router = Router();

router.post("/api/userl/register", register)

export default router