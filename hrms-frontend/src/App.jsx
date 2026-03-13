import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from './pages/SignIn';
import EmployeeProfile from './pages/EmployeeProfile';
import EmploymentInfo from './pages/EmploymentInfo';
import RegisterEmployee from './pages/RegisterEmployee';
import SessionManager from './components/SessionManager';

function ProtectedRoute({ children, adminOnly = false }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user?.roles && !user.roles.includes('ROLE_ADMIN')) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <SessionManager />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <EmployeeProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employment-info"
          element={
            <ProtectedRoute>
              <EmploymentInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/register"
          element={
            <ProtectedRoute adminOnly>
              <RegisterEmployee />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
