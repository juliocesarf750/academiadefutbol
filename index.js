import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import usuariorouter from './routes/modulo_usuario/usuario.routes.js';
import rolrouter from './routes/modulo_usuario/rol.routes.js';
import permisosrouter from './routes/modulo_usuario/permisos.routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(usuariorouter);
app.use(rolrouter);
app.use(permisosrouter);
app.listen(PORT);
console.log(`the server is runnig on port ${PORT}`);