// Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <AppBar position="static" style={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
            Event Management
          </Typography>
          
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#contact">Contact</Button>
         <Link to = '/Login'><Button variant="outlined">Login</Button></Link>
          <Avatar sx={{ bgcolor: 'deepOrange[500]' }}>N</Avatar>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', height: '120vh' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Our Event Management Platform
        </Typography>
        <Typography variant="body8" paragraph>
          Plan and book your events with ease. From weddings to corporate gatherings, we've got you covered.
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our services and make your event unforgettable!
        </Typography>
      </Container>
      <footer style={{ marginTop: '20px', padding: '10px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2023 Your Event Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Navbar;
