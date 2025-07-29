import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Box, useMediaQuery } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../../context/AuthContext';
import SocialLinks from './SocialLinks';
import LoginForm from './LoginForm';
import { useTheme } from '@mui/material/styles';
import { useLogout } from '../../utils/handleLogout';

const Navbar = () => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };

  const hideLoginForm = () => {
    setShowLogin(false);
  };

  const handleLogout = useLogout();

  
  if (location.pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ backgroundColor: 'white' }}>
        <Box
          sx={{ flexGrow: 1 }}
          component="nav"
          aria-label="Användar konto och sociala medier"
        >
          <img
            src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/krissakra_logo.svg"
            alt="Krissäkra Sverige AB"
            className="nav-logo"
            style={{
             height: '40px',
            }}
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
                aria-label="Logga ut"
              >
                Logout
              </Button>
            ) : (
              <IconButton
                onClick={toggleLoginForm}
                color="inherit"
                disableRipple
                aria-label="Öppna inloggningsfönster"
                sx={{
                  transition: 'transform 0.3s, color 0.3s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    backgroundColor: 'transparent',
                  },
                }}
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