import { NextFunction, Request, Response } from "express";

export const validateId = (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id)

    if (isNaN(id) || !Number.isInteger(id) || id < 0) {
        res.status(400).send({ error: 'Valor do parâmetro id inválido' });
        return;
    }
    next()

}