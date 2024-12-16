import { Sequelize } from "sequelize";



const sequelize = new Sequelize('EmpDB','DESKTOP-0AA5AGC\SQLEXPRESS',' ',{
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions:{
        Option:{
            encrypt: true,
            trustServerCertificate: true
        }
    },
    
})

export default sequelize