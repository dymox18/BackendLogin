import { Router } from "express";

import { getPersonals, registerPersonal } from "../controllers/personal";
import validateToken from "./validateTokken";


const router = Router();

router.post("/api/Personal/register", registerPersonal),
router.get("/api/Personal/getPersonals", validateToken,getPersonals)


export default router