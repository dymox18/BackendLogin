import { Sequelize } from "sequelize";



const sequelize = new Sequelize('EmpDB','root','root',{
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize