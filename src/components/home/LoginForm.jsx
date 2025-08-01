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
import { loginUser } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../index.css';

const LoginForm = ({ hideLoginForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  
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
      className="flex items-center justify-center backdrop-blur-xs"
      open
      onClose={hideLoginForm}
      role="dialog"
      aria-modal="true"
    >
      <Box className="w-screen sm:w-[400px] h-[100dvh] sm:h-auto max-h-screen sm:max-h-[90vh] p-4 sm:p-8 bg-transparent sm:bg-white rounded-none sm:rounded-lg shadow-none sm:shadow-lg relative overflow-hidden box-border">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/a5.jpg"
          alt="login-background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-black/0" />
        <Box className="flex justify-center absolute top-2.5 left-1/2 -translate-x-1/2 z-10">
          <img
            className="mt-12 top-[20px] w-[60px] h-[60px]"
            src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/Svan.svg"
            alt="Logo-Svan"
          />
        </Box>
        <Box className="flex justify-end items-start absolute top-0 right-0 w-full h-full bg-transparent">
          <IconButton
            className="bg-transparent"
            onClick={hideLoginForm}
            aria-label="Stäng inloggningsformulär"
          >
            <CloseIcon sx={{ color: 'black' }} />
          </IconButton>
        </Box>
        <Box className="flex flex-col items-center justify-center min-h-screen px-4 sm:pt-40">
          <Box
            className="w-full max-w-sm"
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              sx={{ marginBottom: '1rem', maxWidth: '30rem' }}
              label="Användarnamn"
              aria-label="Fält för användarnamn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              fullWidth
            />
            <TextField
              sx={{ maxWidth: '30rem' }}
              label="Lösenord"
              aria-label="Fält för lösenord"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Box className="pt-20">
              <Button
                type="submit"
                aria-label="Logga in"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  height: '45px',
                  backgroundColor: 'hsl(0, 62%, 45%)',
                  transition: 'var(--transition)',
                  '&:hover': {
                    backgroundColor: 'hsla(0, 98%, 66%, 1.00)',
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