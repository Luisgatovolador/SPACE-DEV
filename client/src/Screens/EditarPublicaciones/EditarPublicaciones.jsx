import React, { useState, useEffect } from 'react';
import NavbarAdministrador from '../NavbarAdministrador/NavbarAdministrador';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Importar el hook useParams
import { useNavigate } from 'react-router-dom';

const EditarPublicaciones = () => {
    const [userData, setUserData] = useState(null);
    const navegar = useNavigate();
    const [formData, setFormData] = useState({
      Titulo: '',
      Autor: '', 
      Resumen: '',
      Fecha: '',
      URL: ''
    });
  
    const { id } = useParams(); // Obtener el ID de la publicación del URL
  
    useEffect(() => {
      const adminData = JSON.parse(sessionStorage.getItem('adminData'));
      if (adminData) {
        setUserData(adminData);
      }
    }, []);
  
    useEffect(() => {
      const obtenerPublicacion = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/publicaciones/publicacionesID/${id}`);
          const publicacion = response.data.data;
          setFormData({
            Titulo: publicacion.Titulo,
            Autor: publicacion.Autor, 
            Resumen: publicacion.Resumen,
            Fecha: publicacion.Fecha,
            URL: publicacion.URL
          });
        } catch (error) {
          console.error('Error al obtener la publicación:', error);
        }
      };
  
      obtenerPublicacion();
    }, [id]);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.put(`http://localhost:3001/publicaciones/update/${id}`, formData);
        console.log('Publicación actualizada exitosamente:', formData);
        navegar('/misPublicaciones');
      } catch (error) {
        console.error('Error al actualizar la publicación:', error);
      }
    };
  
    return (
      <>
        <NavbarAdministrador />
        <Container component="main" maxWidth="md" sx={{ mt: 8 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Editar Publicación
          </Typography>
          <form onSubmit={handleSubmit}>
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
              Guardar Cambios
            </Button>
          </form>
        </Container>
      </>
    );
};

export default EditarPublicaciones;
