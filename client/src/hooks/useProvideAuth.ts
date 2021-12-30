import { useState } from 'react';
import { notification } from 'antd';

import { User } from '../types/User';

export enum Status {
  IDLE = 'IDLE',
  FETCH = 'FETCH',
  OK = 'OK',
  ERROR = 'ERROR',
}
export enum AuthType {
  LOGIN = 'login',
  SIGNUP = 'signup',
}

export const useProvideAuth = () => {
  const [status, setStatus] = useState(() => Status.IDLE);
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  const openNotification = (message: string) => {
    notification.open({
      message: 'Something went wrong!',
      description: message,
    });
  };

  const userRequest = async (type: AuthType, cre: User) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/api/users/${type}`,
      {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(cre), // body data type must match "Content-Type" header
      },
    );
    const res = await response.json();
    return res;
  };

  const signin = (cre: User) => {
    setStatus(Status.FETCH);
    userRequest(AuthType.LOGIN, cre)
      .then((res) => {
        if (res.error) {
          setUser({});
          setToken('');
          setStatus(Status.ERROR);
          openNotification(res.error);
        } else {
          setUser(cre);
          setToken(res.token);
          setStatus(Status.OK);
        }
      })
      .catch((err) => {
        setUser({});
        setToken('');
        setStatus(Status.ERROR);
        openNotification(err.err);
      });
  };

  const signup = (cre: User) => {
    setStatus(Status.FETCH);
    userRequest(AuthType.SIGNUP, cre)
      .then((res) => {
        if (res.error) {
          setUser({});
          setToken('');
          setStatus(Status.ERROR);
          openNotification(res.err);
        } else {
          setUser(cre);
          setToken(res.token);
          setStatus(Status.OK);
        }
      })
      .catch((err) => {
        setUser({});
        setToken('');
        setStatus(Status.ERROR);
        openNotification(err.err);
      });
  };

  const sigout = () => {
    setUser({});
    setToken('');
  };

  const isAuth = !!token;

  return {
    status,
    user,
    token,
    signin,
    signup,
    sigout,
    isAuth,
  };
};
