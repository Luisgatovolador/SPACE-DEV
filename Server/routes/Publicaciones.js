import express from 'express';
import * as publicaciones from '../controllers/Publicacion.js';

const router = express.Router();

router.post('/create', publicaciones.createPublicacion);
router.get('/publicaciones', publicaciones.getPublicaciones);
router.get('/publicacionesID/:id', publicaciones.getPublicacionByID); 
router.get('/publicacionesAutor/:autor', publicaciones.getPublicacionesAutor); 
router.put('/update/:id', publicaciones.updatePublicacion);
router.delete('/delete/:id', publicaciones.deletePublicacion);

export { router as rutasPublicaciones };
