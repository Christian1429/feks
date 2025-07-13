import { useState, useContext } from 'react';
import {
  TextField,
  Button,
  Box,
  IconButton,
  Modal,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { loginUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../index.css';

const LoginForm = ({ hideLoginForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ username, password });
      login(data);
      hideLoginForm();
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Modal
      open
      onClose={hideLoginForm}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(255, 255, 255, 0)',
          backdropFilter: 'blur(2px)',
        },
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        className="modal-box"
        sx={{
          width: isMobile ? '100vw' : '400px',
          height: isMobile ? '100vh' : 'auto',
          maxHeight: isMobile ? '100vh' : '90vh',
          padding: isMobile ? '1rem' : '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: isMobile ? 0 : '12px',
          backgroundColor: isMobile ? 'transparent' : 'white',
          boxShadow: isMobile ? 'none' : theme.shadows[5],
        }}
      >
        <img
          src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/a5.jpg"
          alt="login-background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            filter: 'brightness(0.7)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.0))',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        >
          <img
            src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/Svan.svg"
            alt="Logo-Svan"
            style={{
              position: 'absolute',
              top: '20px',
              width: '60px',
              height: '60px',
            }}
          />
        </Box>
        <IconButton
          onClick={hideLoginForm}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <CloseIcon sx={{ color: 'black' }} />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '5rem',
            height: '100%',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Användarnamn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              fullWidth
              sx={{ marginBottom: '1rem' }}
            />
            <TextField
              label="Lösenord"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              sx={{ marginBottom: '1rem' }}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Box sx={{ paddingTop: '10rem' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  height: '45px',
                  backgroundColor: 'hsl(0, 62%, 45%)',
                  transition: 'var(--transition)',
                  '&:hover': {
                    backgroundColor: 'hsl(0, 80%, 74%)',
                  },
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginForm;