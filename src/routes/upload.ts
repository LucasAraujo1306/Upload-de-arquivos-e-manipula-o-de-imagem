import { Router } from "express";
import multer from 'multer'
import * as uploadController from '../controllers/uploadFile'
const router = Router();

/*const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp')
    },
    filename: (req, file, cb) => {
        let randomNmae = Math.floor(Math.random() * 9999999999);
        cb(null, `${randomNmae}+${Date.now()}` + '.jpg')
    }
})*/

/*const upload = multer({
    storage: storageConfig
})*/


/*const upload = multer({
    storage: multer.memoryStorage() //memoria perigo
});*/


const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png']
        cb(null, allowed.includes(file.mimetype))
    },
    limits: { fieldNameSize: 100, fieldSize: 2000000 }
})

router.post('/upload', upload.single('avatar'), uploadController.uploadFile)
router.post('/uploads', upload.array('avatars', 2), uploadController.uploadsFile)
router.post('/upload_multiplo', upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'gallery', maxCount: 3 }
]), uploadController.uploadMultiplo)

router.post('/file', upload.single('avatar'), uploadController.file);


export default router;
