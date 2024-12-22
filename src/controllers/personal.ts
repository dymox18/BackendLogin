import { Request, Response } from "express"
import { Personal } from "../models/personal"


export const registerPersonal = async (req: Request, res: Response) => {
    const { name, correo, telefono,cargo } = req.body

    Personal.create({
        name: name,
        correo: correo,
        telefono: telefono,
        cargo: cargo,
        estado: 'Empleado Activo',
        status: 1,
    })
    res.json({
        msg: `Empleado  ${cargo} ${name} creado correctamente`
    })
}

export const getPersonals = async (req: Request, res: Response) => {
    const listPersonals = await Personal.findAll();
    res.json({listPersonals })
}