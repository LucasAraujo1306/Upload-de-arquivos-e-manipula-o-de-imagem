import { Router } from "express";
import multer from 'multer'
import * as uploadController from '../controllers/uploadFile'
const router = Router();

const upload = multer({
    dest: './tmp'
})

router.post('/upload', upload.single('avatar'), uploadController.uploadFile)
router.post('/uploads', upload.array('avatars', 2), uploadController.uploadsFile)
router.post('/upload_multiplo', upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'gallery', maxCount: 3 }
]), uploadController.uploadMultiplo)


export default router;
