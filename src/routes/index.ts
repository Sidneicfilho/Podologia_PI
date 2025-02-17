import {Router} from 'express'

import * as usuarioController from '../controllers/usuarioController'

const router = Router()

router.get('/etapa1',usuarioController.etapa1)
router.post('/etapa1',usuarioController.etapa1Post)

router.get('/etapa2',usuarioController.etapa2)
router.post('/etapa2',usuarioController.etapa2Post)

//router.get('/etapa3',usuarioController.etapa3)

router.get('/etapa3',usuarioController.etapa3)
router.post('/etapa3',usuarioController.etapa3Post)

router.get('/etapa4',usuarioController.etapa4)
router.post('/etapa4',usuarioController.etapa4Post)

router.get('/etapa5',usuarioController.etapa5)
router.post('/etapa5',usuarioController.etapa5Post)

router.get('/etapa6',usuarioController.etapa6)
router.post('/etapa6',usuarioController.etapa6Post)

router.get('/etapa7',usuarioController.etapa7)

router.post('/submit', usuarioController.submit);


export default router