import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/home/Navbar';
import ProtectedRoute from './utils/ProtectedRoute';
import AuthProvider from './context/AuthContext';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import  UserDashboard from './pages/UserDashboard';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Navbar />
          <Suspense fallback={<div>Laddar...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute
                    adminRoute="/dashboard"
                    userRoute="/user-dashboard"
                  >
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/user-dashboard" element={<UserDashboard />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
