"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userl_1 = require("../controllers/userl");
const router = (0, express_1.Router)();
router.post("/api/userl/register", userl_1.register),
    router.post("/api/userl/login", userl_1.login);
exports.default = router;
