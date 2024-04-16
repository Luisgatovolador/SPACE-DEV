import React, { useState, useEffect } from 'react';
import NavbarAdministrador from '../NavbarAdministrador/NavbarAdministrador';
import Pie from '../Pie/Pie';
import { Container, Typography, Paper, Grid, TextField, Box } from '@mui/material';
import axios from 'axios';
import imagenDescarga from './descarga.jpeg';
import SearchIcon from '@mui/icons-material/Search';


const HomeAdmin = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState('');

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const response = await axios.get('http://localhost:3001/publicaciones/publicaciones');
        setPublicaciones(response.data.data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    obtenerPublicaciones();
  }, []);

  const handleFiltroNombreChange = (event) => {
    setFiltroNombre(event.target.value);
  };

  const publicacionesFiltradas = publicaciones.filter(publicacion => {
    return publicacion.Titulo.toLowerCase().includes(filtroNombre.toLowerCase());
  });

  return (
    <>
      <NavbarAdministrador />
      <Container component="main" maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
        <Box mr={1} textAlign="center">Blog</Box>
<Box sx={{ display: 'flex', alignItems: 'center' }}>
  <SearchIcon /> {/* Agregamos un ícono de lupa */}
  <TextField
    label="Buscar"
    size="small"
    variant="outlined"
    value={filtroNombre}
    onChange={handleFiltroNombreChange}
    sx={{ flexGrow: 1 }} // Hacer que la TextField ocupe todo el espacio disponible
  />
</Box>


        </Typography>
        <Grid container spacing={2}>
          {publicacionesFiltradas.map((publicacion, index) => (
            <Grid item key={index} xs={12} md={12}>
              <Paper elevation={2} sx={{ p: 2 }}>
                <img src={imagenDescarga} alt="Imagen" style={{ width: '100%', height: '400px', marginBottom: '1rem' }} />
                <Typography variant="h6" component="h2">{publicacion.Titulo}</Typography>
                <Typography variant="textSecondary" >{publicacion.Autor}</Typography>
                <Typography variant="body1">{publicacion.Resumen}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Pie />
    </>
  );
};

export default HomeAdmin;