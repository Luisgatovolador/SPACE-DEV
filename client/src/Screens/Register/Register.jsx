import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from '../Navbar/Navbar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const[Nombre,setNombre]= React.useState()
  const[CorreoElectronico,setCorreoElectronico]= React.useState()
  const[Contrasena,setContrasena]= React.useState()
  const navegar = useNavigate()

  const Registrar = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/administradores/registrar',{CorreoElectronico,Contrasena,Nombre})
    .then(result =>{console.log(result)
    navegar('/homeAdmin')
  })
  .catch(err=> console.log(err))
  }
  return (
    <>
        <Navbar/>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#424242' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrar Administrador
          </Typography>
          <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="Ingresar Nombre Completo"
              name="Nombre"
              autoComplete="email"
              autoFocus
              onChange={(e) => setNombre(e.target.value)}
            />
         
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Dirección Correo Electronico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setCorreoElectronico(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setContrasena(e.target.value)}
            />
    
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#424242', '&:hover': { backgroundColor: '#1c1c1c' } }}
              onClick={Registrar}
            >
              Registrarse
            </Button>
            
        
        </Box>
       
      </Container>
      </>
      );
    }

export default Register