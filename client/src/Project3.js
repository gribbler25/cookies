import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import NavHeaders from './Navigation';
import About from './Components/About';
import ProjectCookies from './Components/Cookies';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Order from './Components/Order';
import Auth from './utils/auth';
import { Link } from 'react-router-dom';

function Project() {
    const [currentPage, setCurrentPage] = useState('About');
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Cookies') {
            return <ProjectCookies />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Signup') {
            return <Signup />;
        }
        if (currentPage === 'Login'){
            return <Login />;
        }
        if (currentPage === 'Order') {
            return <Order />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <AppBar>
                <Toolbar
                className="toolbar">
                    <Button color="inherit"
                        href="#about" onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Us
                    </Button>
                    <Button color="inherit" 
                        href="#cookies" onClick={() => handlePageChange('Cookies')}
                        className={currentPage === 'Cookies' ? 'nav-link active' : 'nav-link'}>Cookies
                    </Button>
                    <Button color="inherit" 
                        href="#contact" onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact
                    </Button>
                    {Auth.loggedIn() ? (
                    <>
      
                     <Button color="inherit" href="/" onClick={logout}>
                          Logout
                        </Button>
                            </>
                    ) : (
                            <>
                    <Button color="inherit" 
                        href="#signup" onClick={() => handlePageChange('Signup')}
                        className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}>Signup
                    </Button>
                    <Button color="inherit" 
                        href="#login" onClick={() => handlePageChange('Login')}
                        className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>Login
                    </Button>
                    </>
                        )}

                    <Button color="inherit" 
                        href="#user" onClick={() => handlePageChange('Order')}
                        className={currentPage === 'Order' ? 'nav-link active' : 'nav-link'}>Place Order
                    </Button>
                </Toolbar>
            </AppBar>
            {renderPage()}
        </div>
    );
}
export default Project;

// import * as React from 'react';
// import { AppBar, IconButton, Menu, Typography, Container, MenuItem } from '@mui/material/';
// import Toolbar from '@mui/material/Toolbar';
// // import MenuIcon from '@mui/icons-material/';
// import { Box } from '@mui/system';

// const pages = ['About', 'Cookies', 'User', 'Contact'];
// // const settings =

// function ResponsiveAppBar() {
//     const [anchorElNav, setAnchorElNav] = React.useState < null | HTMLElement > (null);

//     const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setAnchorElNav(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };


//     return (
//         <AppBar position="static">
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <Box
//                         sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-controls="menu-appbar"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             {/* <MenuIcon /> */}
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     <Typography textAlign="center">{page}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }

// export default ResponsiveAppBar;