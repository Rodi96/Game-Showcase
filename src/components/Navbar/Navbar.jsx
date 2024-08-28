import { useState, useCallback } from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTermLocal, setSearchTermLocal] = useState(searchTerm);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = useCallback((event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
    setSearchTermLocal(newValue);
  }, [setSearchTerm]);

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: 'black',
        border: '2px solid white',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        height: '60px',
        zIndex: 900,
        top: '150px',
        width: '100%',
      }}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
          <MenuIcon />
        </IconButton>
        <Button color="inherit" style={{ color: 'white', fontSize: '1.2rem', marginLeft: '10px' }} onClick={handleHomeClick}>
          GGS
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/">Home</MenuItem>
          <MenuItem component={Link} to="/new-releases">New Releases</MenuItem>
          <MenuItem component={Link} to="/top-games">Top Games</MenuItem>
          <MenuItem component={Link} to="/platforms">Platforms</MenuItem>
          <MenuItem component={Link} to="/about-us">About Us</MenuItem>
          <MenuItem component={Link} to="/support">Support</MenuItem>
        </Menu>
        <Box style={{ flex: 1, margin: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}> 
          <Box
            style={{
              position: 'relative',
              borderRadius: '20px',
              backgroundColor: 'white',
              width: '60%', 
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              color: 'black'
            }}
          >
            <InputBase
              style={{
                color: 'inherit',
                padding: '8px 8px 8px 0',
                paddingLeft: 'calc(1em + 32px)',
                width: '100%',
              }}
              placeholder="Search Games"
              value={searchTermLocal}
              onChange={handleSearchChange}
            />
            <Box
              style={{
                position: 'absolute',
                right: '8px', 
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SearchIcon />
            </Box>
          </Box>
        </Box>
        <Button color="inherit" component={Link} to="/login" style={{ color: 'grey', marginLeft: '20px' }}>Log In</Button>
        <Button color="inherit" component={Link} to="/signup" style={{ color: 'grey', marginLeft: '20px' }}>Sign Up</Button>
        <Button color="inherit" component={Link} to="/my-library" style={{ color: 'grey', marginLeft: '20px' }}>My Library</Button>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Navbar;
