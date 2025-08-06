import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  userRoute: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  userRoute,
}) => {
  const context = useContext(AuthContext);

  if (!context?.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (context.user?.role === 'user') {
    return <Navigate to={userRoute} replace />;
  }

  if (context.user?.role === 'admin') {
    return <>{children}</>;
  }

  return null;
};

export default ProtectedRoute;
