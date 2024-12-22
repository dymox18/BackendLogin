import { Router } from "express";

import { getPersonals, registerPersonal } from "../controllers/personal";


const router = Router();

router.post("/api/Personal/register", registerPersonal),
router.get("/api/Personal/getPersonals", getPersonals)


export default router