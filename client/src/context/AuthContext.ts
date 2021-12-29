import { createContext } from 'react';
// import { useProvideAuth } from '../hooks/useProvideAuth';
import {
  AuthContextType,
  AuthContextDefaultValues,
} from '../types/AuthContextType';

// type Props = {
//   children: JSX.Element | JSX.Element[];
// };

export const AuthContext = createContext<AuthContextType>(
  AuthContextDefaultValues,
);
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
// export function ProvideAuth(props: Props) {
//   const { children } = props;
//   const auth = useProvideAuth();
//   return <AuthContext.
// }
