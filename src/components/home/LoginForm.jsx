import { useState, useContext } from 'react';
import {
  Button,
  Box,
  IconButton,
  Modal,
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
      <Box className="w-screen h-screen sm:w-[650px] sm:h-auto sm:max-h-[800px] p-4 sm:p-8 bg-white sm:rounded-lg sm:shadow-lg relative overflow-hidden box-border">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://s3krissakra.s3.eu-north-1.amazonaws.com/pictures/a5.jpg"
          alt="login-background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-black/0" />
        <Box className="flex justify-center absolute top-2.5 left-1/2 -translate-x-1/2 z-10">
          <img
            className="mt-12 top-[20px] w-[100px] h-[100px]"
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
        <Box className="flex flex-col items-center justify-start px-4 pt-10 sm:pt-6 pb-6 overflow-y-auto h-full sm:h-auto mt-40">
          <Box
            className="w-full max-w-sm"
            component="form"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 max-w-sm p-1 rounded-full backdrop-blur-xl bg-black/10 sm:bg-transparent sm:bg-black">
              <div
                className="
                  relative flex items-center p-2 rounded-full border border-gray-400 h-16 transition-all duration-300
                  bg-black/90 sm:bg-transparent
                  hover:border-white 
                  focus-within:border-white 
                  focus-within:ring-2 
                  focus-within:ring-white 
                  focus-within:backdrop-blur-md 
                  focus-within:shadow-[0_0_20px_rgba(255,255,255,0.3)] 
                  focus-within:bg-black/80
                  sm:focus-within:bg-white/10
                "
              >
                <label htmlFor="username" className="sr-only">
                  Användarnamn
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Användarnamn"
                  className="w-full bg-transparent outline-none pl-2 text-white placeholder-white placeholder:text-base placeholder:font-medium font-bold placeholder:tracking-wider"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4 max-w-sm p-1 rounded-full backdrop-blur-xl bg-black/10 sm:bg-transparent sm:bg-black">
              <div
                className="
                  relative flex items-center p-2 rounded-full border border-white/30 h-16 transition-all duration-300
                  bg-black/90 sm:bg-transparent 
                  hover:border-white/70 
                  focus-within:border-white/90 
                  focus-within:ring-2 
                  focus-within:ring-white/70 
                  focus-within:backdrop-blur-md 
                  focus-within:shadow-[0_0_30px_5px_rgba(255,255,255,0.15)] 
                  focus-within:bg-black/80
                  sm:focus-within:bg-white/10
                "
              >
                <label htmlFor="password" className="sr-only">
                  Lösenord
                </label>
                <input
                  id="password"
                  type="text"
                  placeholder="Lösenord"
                  className="w-full bg-transparent outline-none pl-2 text-white placeholder-white placeholder:text-base placeholder:font-medium font-bold placeholder:tracking-wider"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Box className="pt-18">
              <Button
                type="submit"
                aria-label="Logga in"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  fontSize: '1rem',
                  backdropFilter: 'blur(10px)',
                  height: '60px',
                  maxWidth: '24rem',
                  backgroundColor: 'hsl(0, 62%, 45%)',
                  letterSpacing: '0.15em',
                  transition:
                    'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'hsla(0, 73%, 51%, 1.00)',
                    transform: 'scale(1)',
                    boxShadow: '0 0 4px 1px hsla(0, 73%, 51%, 0.7)',
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