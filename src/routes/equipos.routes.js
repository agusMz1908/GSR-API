import {Router} from 'express';
import * as equipoController from "../controllers/equipos.controller";

const router = Router();

router.post('/', equipoController.createEquipo);
router.get('/', equipoController.getEquipos);
router.get('/:equipoId', equipoController.getEquipoById);
router.put('/:equipoId', equipoController.updateEquipoById);
router.delete('/:equipoId', equipoController.deleteEquipoById);

export default router;