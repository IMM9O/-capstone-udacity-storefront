import { Status } from '../hooks/useProvideAuth';
import { User } from './User';

export type AuthContextType = {
  status: string;
  user: User;
  token: string;
  signin: (user: User) => void;
  signup: (user: User) => void;
  sigout: () => void;
  isAuth: boolean;
};

export const AuthContextDefaultValues: AuthContextType = {
  status: Status.IDLE,
  token: '',
  user: {},
  signin: ({}) => {},
  signup: ({}) => {},
  sigout: () => {},
  isAuth: false,
};
