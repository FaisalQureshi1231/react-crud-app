import React from 'react'
import { AppBar, Box, Button, IconButton, styled, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom'

const ButtonNavLink = styled(Button)(({ theme, isActive }) => ({
    textDecoration: 'none',
    color: isActive ? theme.palette.primary.light : '#fff', // Change the color for active link
    '&.active': {
        fontWeight: 'bold', // Example of adding bold font for active link
    },
}));

function Navbar() {
  return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
                        <NavLink to='/'>
                            <ButtonNavLink sx={{ color : '#fff' }}>Home</ButtonNavLink>
                        </NavLink>
                        <NavLink to='/users'>
                            <ButtonNavLink sx={{ color: '#fff' }}>Users</ButtonNavLink>
                        </NavLink>
                    </Typography>
                    <Link to='/login'>
                        <ButtonNavLink sx={{ color: '#fff' }}>Login</ButtonNavLink>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar