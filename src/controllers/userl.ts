import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { Userl } from "../models/userl"
import { Op } from "sequelize"
import  jwt  from "jsonwebtoken"



export const register:any = async(req:Request, res: Response) => {
    const{name,email,password,credential} = req.body
    
    //valida si el email o la credencial existen enla BD
    const userl = await Userl.findOne({where: {[Op.or]:{email:email, credential:credential}}})

    if(userl){
        return res.status(400).json({
            msg:`El usuario ${email} ya existe o la credencial ${credential}`
        })
    }
   
    const passwordHash = await bcrypt.hash(password, 20)
    
    
    try {
        Userl.create({
            name:name,
            email:email,
            password:passwordHash,
            credential:credential,
            status:1,
        })
        res.json({
            msg:`User ${name} ${email} create success`
        })
    } catch (error) {
        res.status(400).json({
            msg:`error al crear El usuario ${name} ya existe.`
        })
    }


   
}
export const login:any = async(req:Request, res: Response) =>{

    const{email,password} = req.body
    const userl:any = await Userl.findOne({where:{email:email}})

    
    if(!userl){
        return res.status(400).json({
            msg:`El usuario  ${email} NO existe `
        })
    }
    const passwordvalid = await bcrypt.compare(password,userl.password)

    if(!passwordvalid){
        return res.status(400).json({
            msg:`password incorrecto => ${password} `
        })
    }

    const  token = jwt.sign({email:email,password:password},
         process.env.SECRET_KEY ||'fc4e367ac1541a4f251970',{
            expiresIn: '1h'
         });
         res.json({token})
    
}