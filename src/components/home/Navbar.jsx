import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Box, useMediaQuery } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../../images/krissakra_logo.svg';
import { AuthContext } from '../../context/AuthContext';
import SocialLinks from './SocialLinks';
import LoginForm from '../dash/LoginForm';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };

  const hideLoginForm = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: 'white' }}>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={logo}
            className="nav-logo"
            alt="Krissäkra Sverige AB"
            style={{ height: '40px' }}
          />
        </Box>
        {!isMobile && (
          <Box sx={{ display: 'flex' }}>
            <SocialLinks itemClass="nav-icon" />
            {isAuthenticated ? (
              <Button
                onClick={handleLogout}
                variant="contained"
                sx={{ margin: '8px 8px', height: '2rem' }}
              >
                Logout
              </Button>
            ) : (
              <IconButton
                onClick={toggleLoginForm}
                color="inherit"
                sx={{ margin: '0 8px' }}
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>
        )}
        {isMobile &&
          (isAuthenticated ? (
            <Button
              onClick={handleLogout}
              variant="contained"
              sx={{ margin: '0 8px' }}
            >
              Logout
            </Button>
          ) : (
            <IconButton
              onClick={toggleLoginForm}
              color="inherit"
              sx={{ margin: '0 8px' }}
            >
              <AccountCircle />
            </IconButton>
          ))}
      </Toolbar>
      {showLogin && <LoginForm hideLoginForm={hideLoginForm} />}
    </AppBar>
  );
};

export default Navbar;