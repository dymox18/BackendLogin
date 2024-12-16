import express, { Application } from 'express';
import sequelize from '../database/conection';

class server {
    private app: Application;
    private port: string | undefined; 
    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;
        this.listen();
        this.DBconnet();
        
    }   
    listen(){
        this.app.listen(this.port, () => {
            console.log("Puerto: " + this.port)
        })
    }
    async DBconnet(){
        try {
            await sequelize.authenticate();
            console.log("Conexion Exitosa");
        } catch (error) {
            console.log("Error de Conexion Exitosa", error);
        }
    }
}

export default server