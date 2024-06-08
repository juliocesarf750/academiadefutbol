import { Router } from "express";
import { deleteUsuarios, getUsuario, getUsuarios, login, logout, registro } from "../../controllers/modulo_usuario/usuario.controllers.js";

const router = Router();

router.post('/login',login);
router.post('logout',logout);
router.get('/usuarios',getUsuarios);
router.get('/usuarios',getUsuario);
router.post('/usuarios',registro);
router.delete('/usuarios/:id',deleteUsuarios);

export default router;