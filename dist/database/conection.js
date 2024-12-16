"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('EmpDB', 'DESKTOP-0AA5AGC\SQLEXPRESS', ' ', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        Option: {
            encrypt: true,
            trustServerCertificate: true
        }
    },
});
exports.default = sequelize;
