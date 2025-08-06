import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function useLogout(): () => void {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    context?.logout();
    navigate('/');
  };

  return handleLogout;
}
