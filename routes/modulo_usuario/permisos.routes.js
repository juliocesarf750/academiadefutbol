import { Router } from "express"
import { createPermiso, deletePermiso, getPermiso, getPermisos, updatePermiso } from "../../controllers/modulo_usuario/permisos.controllers.js";



const router = Router();

router.get('/api/permisos',getPermisos);
router.get('/api/permisos/:id',getPermiso);
router.post('/api/permisos',createPermiso);
router.put('/api/permisos/:id',updatePermiso);
router.delete('/api/permisos/:id',deletePermiso);

export default router;