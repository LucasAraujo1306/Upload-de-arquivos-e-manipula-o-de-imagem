import { Request, Response } from "express";

export const uploadFile = async (req: Request, res: Response) => {
    console.log(req.file)

    return res.json({})
}

export const uploadsFile = async (req: Request, res: Response) => {
    console.log(req.files)

    return res.json({})
}

export const uploadMultiplo = async (req: Request, res: Response) => {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    console.log('avatar:', files.avatar)
    console.log('gallery:', files.gallery)

    return res.json({})
}

