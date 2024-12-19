import { Router } from "express";

import { registerPersonal } from "../controllers/personal";


const router = Router();

router.post("/api/Personal/registerPersonal", registerPersonal)

export default router