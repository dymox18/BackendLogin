import { DataTypes } from "sequelize";
import sequelize from "../database/conection";


export const Personal = sequelize.define(
    'Personal',
    {
        id:{type:DataTypes.INTEGER, primaryKey: true,autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull:false},
        correo: {type: DataTypes.STRING,unique:true, allowNull:false},
        telefono: {type: DataTypes.STRING, allowNull:false},
        cargo: {type: DataTypes.STRING, allowNull:false},
        estado: {type: DataTypes.STRING, allowNull:false},
        status: {type: DataTypes.INTEGER, allowNull:false},

    }
)