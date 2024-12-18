import express, { Application } from 'express';
import sequelize from '../database/conection';
import Ruserl from '../routes/userl';
import { Userl } from './userl';

class server {
    private app: Application;
    private port: string;
    constructor() {

        this.app = express();
        this.port = process.env.PORT || '3016';
        this.listen();
        this.midlewares();
        this.router();
        this.DBconnet();

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Puerto: " + this.port)
        })
    }
    router(){
        this.app.use(Ruserl)
    }
    midlewares(){
        this.app.use(express.json())
    }

    async DBconnet() {
        try {
            // await sequelize.authenticate();
            // await Userl.sync({ force: true }); drop table i create table
            await Userl.sync();
            console.log('The table for the User model was just (re)created!');
            console.log("Conexion Exitosa");
        } catch (error) {
            console.log("Error de Conexion", error);
        }
    }
}

export default server