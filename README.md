# Creación de Aplicativo para Prueba Técnica de XPACE DEV

## Requerimientos Funcionales

- **RE-F-01:** La aplicación debe permitir a los Administradores iniciar sesión en la misma.
- **RE-F-02:** Los Administradores deben poder crear, modificar, eliminar y visualizar las publicaciones que realicen.
- **RE-F-03:** Los usuarios deben ser capaces de visualizar las publicaciones realizadas por otros usuarios.
- **RE-F-04:** La aplicación debe poder crear nuevos administradores.

## Requerimientos No Funcionales

- **RE-NF-01:** La interfaz de usuario debe ser intuitiva y fácil de usar.
- **RE-NF-02:** El sistema debe responder rápidamente ante las operaciones comunes.
- **RE-NF-03:** La aplicación debe ser responsive y visualizarse correctamente en cualquier dispositivo.

## Historias de Usuario

### Usuario

- **HU-U-001:** Como usuario, quiero poder visualizar todas las publicaciones de la aplicación sin restricciones.
- **HU-U-002:** Como usuario, deseo poder buscar publicaciones específicas en la aplicación.

### Administrador

- **HU-A-001:** Como administrador, quiero visualizar las publicaciones que he realizado en la aplicación.
- **HU-A-002:** Como administrador, deseo poder crear, actualizar, eliminar y visualizar las publicaciones que he creado.

## Tecnologías Utilizadas

- Visual Studio Code
- React
- MongoDB

## Comandos Instalados

### Servidor

```bash
npm init -y
npm install express mongoose cors nodemon
```
### Cliente
```
npx create-react-app client
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @mui/icons-material
npm install react-router-dom
npm install axios
```
## Esquemas NoSQL
### Publicacion
```
const PublicacionSchema = new Schema({
    Titulo: String,
    Autor: String,
    Resumen: String,
    Fecha: Date,
    URl: String
}, {
    timestamps: true
});
```
### Administrador
```
const AdministradorSchema = new Esquema({
    Nombre: String,
    CorreoElectronico: String,
    Contrasena: String
}, {
    timestamps: true
});
```
## Comandos para Ejecutar 
### Server
```
npm run dev
```
### Cliente 
```
npm start
```
## Pantallas 

### Inicio 
![image](https://github.com/Luisgatovolador/SPACE-DEV/assets/116209151/cdbd1afa-3dfb-4ab9-b8fb-e9c4484a75e0)
- En esta panalla las personas puede entrar a ver tolas las publicaciones realizadas por los Administradores
- En esta pantalla se pueden buscar por nombre las publicaciones 
### Login
![image](https://github.com/Luisgatovolador/SPACE-DEV/assets/116209151/95ce6dcc-b3d9-445e-8599-5fb416903294)
- En esta panalla los Administradores pueden iniciar sesión para poder gestionar sus publicaciones asi como crear nuevas

### Registro
![image](https://github.com/Luisgatovolador/SPACE-DEV/assets/116209151/17b9b641-a9c4-4dcc-82d3-c0765626e9d3)
- En esta panalla los Usuarios se pueden registrar para poder gestionar sus publicaciones asi como crear nuevas

### InicioAdministradores
![image](https://github.com/Luisgatovolador/SPACE-DEV/assets/116209151/3e9dbfc6-ce17-40a5-9574-a06d3bb274dd)
- En esta panalla los Administradores pueden ver sus datos al mismo tiempo ver las publicaciones de los demas
- En esta pantalla se pueden buscar por nombre las publicaciones
  
### Crear Publicaciones
![image](https://github.com/Luisgatovolador/SPACE-DEV/assets/116209151/5226a602-64b4-452e-a455-e48f50a9c592)
- En esta pantalla los Administradores pueden crear nuevas publicaciones 

### Ver Publicaciones
![image](https://github.com/Luisgatovolador/SPACE-DEV/assets/116209151/bdbbb05c-ec40-4361-a03c-db65eafafcf6)
- En esta pantalla los Administradores pueden ver sus publicaciones para poderlas eliminar o modigicar

### Modificar Modificaciones
![image](https://github.com/Luisgatovolador/SPACE-DEV/assets/116209151/0831e883-5d67-4f64-8d6c-00df64c9e2a0)
- En esta pantalla los Administradores pueden modificar sus publicaciones 


