import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { Userl } from "../models/userl"
import { Op } from "sequelize"
import  jwt  from "jsonwebtoken"



export const register:any = async(req:Request, res: Response) => {
    const{name,correo,password,credential} = req.body
    
    //valida si el correo o la credencial existen enla BD
    const userl = await Userl.findOne({where: {[Op.or]:{correo:correo, credential:credential}}})

    if(userl){
        return res.status(400).json({
            msg:`El usuario ${correo} ya existe o la credencial ${credential}`
        })
    }
   
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
export const login:any = async(req:Request, res: Response) =>{

    const{correo,password} = req.body
    const userl:any = await Userl.findOne({where:{correo:correo}})

    
    if(!userl){
        return res.status(400).json({
            msg:`El usuario  ${correo} NO existe `
        })
    }
    const passwordvalid = await bcrypt.compare(password,userl.password)

    if(!passwordvalid){
        return res.status(400).json({
            msg:`password incorrecto => ${password} `
        })
    }

    const  token = jwt.sign({correo:correo,password:password},
         process.env.SECRET_KEY ||'fc4e367ac1541a4f251970',{
            expiresIn: '1h'
         });
         res.json({token})
    
}