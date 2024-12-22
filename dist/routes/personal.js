"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = require("../controllers/personal");
const router = (0, express_1.Router)();
router.post("/api/Personal/register", personal_1.registerPersonal),
    router.get("/api/Personal/getPersonals", personal_1.getPersonals);
exports.default = router;
