import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const Navbar = () => {
    const [filtroNombre, setFiltroNombre] = React.useState('');

    const handleFiltroNombreChange = (event) => {
        setFiltroNombre(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#FFCCCB', color: 'black' }}> {/* Cambio de color a rosa pastel */}
            <AppBar position="static" sx={{ backgroundColor: '#FFC0CB' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link>
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <SearchIcon />
                        <TextField
                            label="Buscar"
                            size="small"
                            variant="outlined"
                            value={filtroNombre}
                            onChange={handleFiltroNombreChange}
                            sx={{ flexGrow: 1 }}
                        />
                    </Box>

                    <Button 
                        color="inherit" 
                        component={Link} 
                        to="/login" 
                        sx={{ backgroundColor: '#FFCCCB', color: 'black' }} // Color rosa palo para el fondo y negro para el texto
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
