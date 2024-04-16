import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarAdministrador from '../NavbarAdministrador/NavbarAdministrador';

import { Container, Typography, Paper, Grid, Button } from '@mui/material';

const MisPublicaciones = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    Autor: '', 
  });
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const adminData = JSON.parse(sessionStorage.getItem('adminData'));
    if (adminData) {
      setUserData(adminData);
      setFormData(prevState => ({
        ...prevState,
        Autor: adminData.CorreoElectronico 
      }));
    }
  }, []);

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/publicaciones/publicacionesAutor/${formData.Autor}`);
        setPublicaciones(response.data.data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    if (formData.Autor) {
      obtenerPublicaciones();
    }
  }, [formData.Autor]);

  const handleEliminar = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/publicaciones/delete/${id}`);
      setPublicaciones(prevPublicaciones => prevPublicaciones.filter(publicacion => publicacion._id !== id));
    } catch (error) {
      console.error('Error al eliminar la publicación:', error);
    }
  };

  return (
    <>
      <NavbarAdministrador />
      <Container component="main" maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom >
          Estas son tus publicaciones 
        </Typography>
        <Grid container spacing={2}>
          {publicaciones.map((publicacion, index) => (
            <Grid item key={index} xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 2 }}>
                <img src={publicacion.URL} alt={publicacion.Titulo} style={{ width: '100%', marginBottom: '1rem' }} />
                <Typography variant="h6" component="h2">{publicacion.Titulo}</Typography>
                <Typography variant="textSecondary">{publicacion.Autor}</Typography>
                <br />
                <Button variant="contained" color="primary" onClick={() => handleEliminar(publicacion._id)}>Eliminar</Button>
                <Link to={`/EditarPublicaciones/${publicacion._id}`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="secondary">Editar</Button>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    
    </>
  );
};

export default MisPublicaciones;
