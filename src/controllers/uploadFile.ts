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
    //const files = req.files as { [fieldname: string]: Express.Multer.File[] }; aceita tudo

    /*type UploadTypes = {
        [fieldname:string]:Express.Multer.File[]
    }*/ //permiter aceita outros files.qualquer coisa 

    /*type UploadTypes = {
        avatar: Express.Multer.File[],
        gallery: Express.Multer.File[]
    }

    const files = req.files as UploadTypes;*/ //pode passa direto o type

    const files = req.files as {
        avatar: Express.Multer.File[],
        gallery: Express.Multer.File[]
    }

    console.log('avatar:', files.avatar)
    console.log('gallery:', files.gallery)

    return res.json({})
}

export const file = async (req: Request, res: Response) => {
    console.log('file', req.file);
    console.log('files', req.files)

    return res.json({})
}


