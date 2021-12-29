import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const PrivateOutlet = () => {
  const auth = useAuth();
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

const ProtectedOutlet = () => {
  const auth = useAuth();
  return auth.token ? <Navigate to="/" /> : <Outlet />;
};

const PrivateRoute = (props: Props) => {
  const { children } = props;
  const auth = useAuth();
  return auth.token ? children : <Navigate to="/login" />;
};

export { PrivateOutlet, ProtectedOutlet, PrivateRoute };
