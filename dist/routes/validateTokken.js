"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headersToken = req.headers['authorization'];
    if (headersToken != undefined && headersToken.startsWith('Bearer ')) {
        try {
            const token = headersToken.slice(7);
            console.log(token);
            jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "fc4e367ac1541a4f251970");
            next();
        }
        catch (error) {
            res.status(401).json({
                msg: `tokkn invalido`
            });
        }
    }
    else {
        res.status(401).json({
            msg: `Acceso Denegado`
        });
    }
};
exports.default = validateToken;
