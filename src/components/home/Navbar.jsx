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
      <Toolbar className="bg-white">
        <Box
          className="flex-grow "
          component="nav"
          aria-label="Användar konto och sociala medier"
        >
          <img
            src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/krissakra_logo.svg"
            alt="Krissäkra Sverige AB"
            className="h-16"
          />
        </Box>
        {!isMobile && (
          <Box className="flex">
            <SocialLinks/>
            {isAuthenticated ? (
              <Button
                className="m-2 h-8"
                onClick={handleLogout}
                variant="contained"
                aria-label="Logga ut"
              >
                Logout
              </Button>
            ) : (
              <IconButton
                className="transition-transform ease-in-out duration-1000 hover:scale-120"
                onClick={toggleLoginForm}
                color="inherit"
                disableRipple
                aria-label="Öppna inloggningsfönster"
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>
        )}
        {isMobile &&
          (isAuthenticated ? (
            <Button
              className="mx-2"
              onClick={handleLogout}
              variant="contained"
              aria-label="Logga ut"
            >
              Logout
            </Button>
          ) : (
            <IconButton
              className="mx-2"
              onClick={toggleLoginForm}
              aria-label="Öppna inloggningsfönster"
              color="inherit"
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