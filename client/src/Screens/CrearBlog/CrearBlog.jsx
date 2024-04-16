import React, { useState, useEffect } from 'react';
import NavbarAdministrador from '../NavbarAdministrador/NavbarAdministrador';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const CrearPublicacion = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    Titulo: '',
    Autor: '', 
    Resumen: '',
    Fecha: '',
    URL: ''
  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const Crearcion = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/publicaciones/create', formData);
      console.log('Publicación creada exitosamente:', formData);
  
      setFormData({
        Titulo: '',
        Autor: '', 
        Resumen: '',
        Fecha: '',
        URL: ''
      });
    } catch (error) {
      console.error('Error al crear la publicación:', error);
    }
  };

  return (
    <>
      <NavbarAdministrador />
      <Container component="main" maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Crear Nueva Publicación
        </Typography>
        <form onSubmit={Crearcion}>
          <TextField
            fullWidth
            label="Título"
            name="Titulo"
            value={formData.Titulo}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Resumen"
            name="Resumen"
            value={formData.Resumen}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Fecha"
            name="Fecha"
            type="date"
            value={formData.Fecha}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="URL de la Imagen"
            name="URL"
            value={formData.URL}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Crear Publicación
          </Button>
        </form>
      </Container>
    </>
  );
};

export default CrearPublicacion;
