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
const express_1 = __importDefault(require("express"));
const userl_1 = __importDefault(require("../routes/userl"));
const userl_2 = require("./userl");
class server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3016';
        this.listen();
        this.midlewares();
        this.router();
        this.DBconnet();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Puerto: " + this.port);
        });
    }
    router() {
        this.app.use(userl_1.default);
    }
    midlewares() {
        this.app.use(express_1.default.json());
    }
    DBconnet() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // await sequelize.authenticate();
                // await Userl.sync({ force: true }); drop table i create table
                yield userl_2.Userl.sync();
                console.log('The table for the User model was just (re)created!');
                console.log("Conexion Exitosa");
            }
            catch (error) {
                console.log("Error de Conexion", error);
            }
        });
    }
}
exports.default = server;
