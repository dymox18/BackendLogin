import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headersToken = req.headers['authorization']

    if (headersToken != undefined && headersToken.startsWith('Bearer ')) {
        try {
            const token = headersToken.slice(7)
            console.log(token);
            jwt.verify(token, process.env.SECRET_KEY || "fc4e367ac1541a4f251970")
            next()
        } catch (error) {
            res.status(401).json({
                msg: `tokkn invalido`
            })
        }
    } else {
        res.status(401).json({
            msg: `Acceso Denegado`
        })
    }

}

export default validateToken