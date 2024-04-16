import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Pie = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor: '#424242',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Tu Empresa - Todos los derechos reservados.
      </Typography>
      <Typography variant="body2">
        Desarrollado con amor por Luis Oswaldo Rodríguez López
      </Typography>
    </Box>
  );
};

export default Pie;
