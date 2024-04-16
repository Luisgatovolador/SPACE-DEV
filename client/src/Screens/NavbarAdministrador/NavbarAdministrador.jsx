import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavbarAdministrador = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const adminData = JSON.parse(sessionStorage.getItem('adminData'));
    setUserData(adminData);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCerrarSesion = () => {
    sessionStorage.removeItem('adminData');
    window.location.href = '/'; 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#424242' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/homeAdmin" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link>
          </Typography>
          <Button color="inherit" component={Link} to="/crearBlog">Nuevo Blog</Button>
          <Button color="inherit" component={Link} to="/misPublicaciones">Mis Blog</Button>
          <Button color="inherit" onClick={handleClick}>{userData ? userData.Nombre : 'Usuario'}</Button>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {userData && (
              <>
                <MenuItem disabled>{userData.Nombre}</MenuItem>
                <MenuItem disabled>{userData.CorreoElectronico}</MenuItem>
                <MenuItem onClick={handleCerrarSesion}>Cerrar Sesión</MenuItem>
              </>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavbarAdministrador;
