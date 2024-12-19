"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = require("../controllers/personal");
const router = (0, express_1.Router)();
router.post("/api/Personal/registerPersonal", personal_1.registerPersonal);
exports.default = router;
