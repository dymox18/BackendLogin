"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userl_1 = require("../models/userl");
const sequelize_1 = require("sequelize");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, credential } = req.body;
    //valida si el email o la credencial existen enla BD
    const userl = yield userl_1.Userl.findOne({ where: { [sequelize_1.Op.or]: { email: email, credential: credential } } });
    if (userl) {
        return res.status(400).json({
            msg: `El usuario ${email} ya existe o la credencial ${credential}`
        });
    }
    const passwordHash = yield bcrypt_1.default.hash(password, 20);
    try {
        userl_1.Userl.create({
            name: name,
            email: email,
            password: passwordHash,
            credential: credential,
            status: 1,
        });
        res.json({
            msg: `User ${name} ${email} create success`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `error al crear El usuario ${name} ya existe.`
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const userl = yield userl_1.Userl.findOne({ where: { email: email } });
    if (!userl) {
        return res.status(400).json({
            msg: `El usuario  ${email} NO existe `
        });
    }
    const passwordvalid = yield bcrypt_1.default.compare(password, userl.password);
    if (!passwordvalid) {
        return res.status(400).json({
            msg: `password incorrecto => ${password} `
        });
    }
    const token = jsonwebtoken_1.default.sign({ email: email, password: password }, process.env.SECRET_KEY || 'fc4e367ac1541a4f251970', {
        expiresIn: '1h'
    });
    res.json({ token });
});
exports.login = login;
