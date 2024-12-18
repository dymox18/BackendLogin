import { DataTypes } from "sequelize";
import sequelize from "../database/conection";


export const Userl = sequelize.define(
    'Userl',
    {
        id:{type:DataTypes.INTEGER, primaryKey: true,autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull:false},
        correo: {type: DataTypes.STRING,unique:true, allowNull:false},
        password: {type: DataTypes.STRING, allowNull:false},
        credential: {type: DataTypes.STRING,unique:true, allowNull:false},
        status: {type: DataTypes.INTEGER, allowNull:false},

    }
)