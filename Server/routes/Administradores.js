import express from 'express'
import * as Adinistradores from '../controllers/Administradores.js'
const router = express.Router();

router.get("/obtener",Adinistradores.Administrador);
router.post("/registrar",Adinistradores.registrar);
router.post("/login", Adinistradores.loginAdmin);

export {router as rutasAdministradores};
