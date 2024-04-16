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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [CorreoElectronico, setCorreoElectronico] = React.useState('');
  const [Contrasena, setContrasena] = React.useState('');
  const navegar = useNavigate();

  const Ingresar = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/administradores/login', { CorreoElectronico, Contrasena })
      .then(response => {
        const { success, message, administrador } = response.data;
        if (success) {
          sessionStorage.setItem('adminData', JSON.stringify(administrador));
          navegar('/homeAdmin');
        } else {
          alert(message); 
        }
      })
      .catch(error => console.error('Error al iniciar sesión:', error));
  }

  return (
    <>
      <Navbar />
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
            Iniciar Sesión
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Dirección Correo Electronico"
            name="email"
            autoComplete="email"
            autoFocus
            value={CorreoElectronico}
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
            value={Contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#424242', '&:hover': { backgroundColor: '#1c1c1c' } }}
            onClick={Ingresar}
          >
            Iniciar Sesión
          </Button>
        </Box>
        <a href="/register" style={{ display: 'block', marginTop: '10px', textAlign: 'center', color: '#007bff' }}>Registrarse</a>

      </Container>
    </>
  );
}

export default Login;
