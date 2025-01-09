import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, userRoute }) => {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (user.role === 'user') {
    return <Navigate to={userRoute} replace />;
  }

  if (user.role === 'admin') {
    return children;
  }
};

export default ProtectedRoute;
