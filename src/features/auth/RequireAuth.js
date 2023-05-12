import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const auth = useAuth();
  const roles = [auth.role];

  const content = roles.some((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );

  return content;
};
