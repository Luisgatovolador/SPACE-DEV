/***
 * Autor:Luis Oswaldo Rodríguez López
 * Conexion a base de datos 
 */
//importaciones para realizar la conexion a la base de datos
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//Importaciones de rutas 
import { rutasAdministradores } from './routes/Administradores.js';
import { rutasPublicaciones } from './routes/Publicaciones.js';
/** Crea instancia en express y define el puerto que se utilizar */
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

// Definir la dirección para la base de datos MongoDB

const direccion = 'mongodb://127.0.0.1:27017/xpace-dev';

// Conexion a la base de datos 
mongoose.connect(direccion)
  .then(() => console.log('Conectado a MongoDB '))
  .catch(error => console.error('Error al conectar a MongoDB :', error));

  //Establecer rutas principales
app.use("/administradores", rutasAdministradores);
app.use("/publicaciones",rutasPublicaciones)

//Establese el pueto de escuha de la base de datos  
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });

  