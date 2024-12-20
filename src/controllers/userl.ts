import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { Userl } from "../models/userl"
import { Op } from "sequelize"


export const register = async(req:Request, res: Response) => {
    const{name,correo,password,credential} = req.body
    
    //valida si el correo o la credencial existen enla BD
    const userUnique = await Userl.findOne({where: {[Op.or]:{correo:correo, credential:credential}}})

    if(userUnique){
        return res.status(400).json({
            msg:`El usuario ${correo} ya existe o la credencial ${credential}`
        })
    }
    console.log("usuario o credencial");
    const passwordHash = await bcrypt.hash(password, 20)
    
    try {
        Userl.create({
            name:name,
            correo:correo,
            password:passwordHash,
            credential:credential,
            status:1,
        })
        res.json({
            msg:`User ${name} ${correo} create success`
        })
    } catch (error) {
        res.status(400).json({
            msg:`error al crear El usuario ${name} ya existe.`
        })
    }


   
}
export const login = async(req:Request, res: Response) =>{
    console.log(req.body);
    res.json({
        msg:`Inicio de secion EXITOSO =>`,
        body: req.body
    })
}