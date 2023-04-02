import { unlink } from 'fs/promises'
import { Request, Response } from "express";
import sharp from "sharp";

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
    if (req.file) {
        const filename = `${req.file.filename}.jpg`
        await sharp(req.file.path)
            .resize(300, 300)//largura x altura
            .toFormat('jpeg')
            .toFile(`./public/media/${filename}`)

        await unlink(req.file.path);

        res.json({ image: `${filename}` })
    } else (
        res.status(400).json({ error: 'Arquivo inválido' })
    )


}



