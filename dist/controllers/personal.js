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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonals = exports.registerPersonal = void 0;
const personal_1 = require("../models/personal");
const registerPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, correo, telefono, cargo } = req.body;
    personal_1.Personal.create({
        name: name,
        correo: correo,
        telefono: telefono,
        cargo: cargo,
        estado: 'Empleado Activo',
        status: 1,
    });
    res.json({
        msg: `Empleado  ${cargo} ${name} creado correctamente`
    });
});
exports.registerPersonal = registerPersonal;
const getPersonals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPersonals = yield personal_1.Personal.findAll();
    res.json({ listPersonals });
});
exports.getPersonals = getPersonals;
