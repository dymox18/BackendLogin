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
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    correo: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    telefono: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    cargo: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    estado: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    status: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
});
