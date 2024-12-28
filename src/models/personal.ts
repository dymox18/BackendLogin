import { DataTypes } from "sequelize";
import sequelize from "../database/conection";


export const Personal = sequelize.define(
    'Personal',
    {
        id:{type:DataTypes.INTEGER, primaryKey: true,autoIncrement: true},
        Nombre: {type: DataTypes.STRING, allowNull:false},
        Correo: {type: DataTypes.STRING,unique:true, allowNull:false},
        Telefono: {type: DataTypes.STRING, allowNull:false},
        Cargo: {type: DataTypes.STRING, allowNull:false},
        EstadoUsuario: {type: DataTypes.STRING, allowNull:false},
        status: {type: DataTypes.INTEGER, allowNull:false},

    }
)