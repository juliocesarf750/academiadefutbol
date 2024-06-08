import { Router } from "express";
import { createRoles, deleteRoles, getRol, getRoles, updateRoles } from "../../controllers/modulo_usuario/rol.controllers.js";



const router = Router();

router.get('/api/roles',getRoles);
router.get('/api/roles/:id',getRol);
router.post('/api/roles',createRoles);
router.delete('/api/roles/:id',deleteRoles);
router.put('/api/roles/:id',updateRoles);

export default router;