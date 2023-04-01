import { Router } from "express";
import * as ApiController from '../controllers/apiController'
import { validateId } from "../middlewares/phrasesMid";

const router = Router();

router.get('/ping', ApiController.ping)
router.get('/random', ApiController.random)
router.get('/nome/:nome', ApiController.nome)

router.post('/frases', ApiController.createPhrases)
router.get('/frases', ApiController.listPhrases)
router.get('/frases/aleatoria', ApiController.randomPhrases)
router.get('/frases/:id', validateId, ApiController.getPhrases)
router.put('/frases/:id', validateId, ApiController.updatePhrase)
router.delete('/frases/:id', validateId, ApiController.deletePhrase)


export default router;