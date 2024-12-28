"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personal = void 0;
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../database/conection"));
exports.Personal = conection_1.default.define('Personal', {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Nombre: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Correo: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    Telefono: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Cargo: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    EstadoUsuario: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    status: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
});
