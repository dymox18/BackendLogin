import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { Userl } from "../models/userl"


export const register = async(req:Request, res: Response) => {
    const{name,correo,password,credential} = req.body

    const passwordHash = await bcrypt.hash(password, 20)
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
}