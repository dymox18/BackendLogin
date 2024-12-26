"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = require("../controllers/personal");
const validateTokken_1 = __importDefault(require("./validateTokken"));
const router = (0, express_1.Router)();
router.post("/api/Personal/register", personal_1.registerPersonal),
    router.get("/api/Personal/getPersonals", validateTokken_1.default, personal_1.getPersonals);
exports.default = router;
