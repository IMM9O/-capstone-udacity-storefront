import { useEffect, useState } from 'react';
import { User } from '../types/User';
import { useLocalStorage } from './useLocalStorage';

export enum Status {
  IDLE = 'IDLE',
  FETCH = 'FETCH',
  OK = 'OK',
  ERROR = 'ERROR',
}

export const useToken = (url: string) => {
  const [user, setUser] = useState({});
  const [status, setStatus] = useState(() => Status.IDLE);
  const [token, setToken] = useLocalStorage('token', '');

  useEffect(() => {
    const userRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_SERVER}/api/users/${url}`,
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
          body: JSON.stringify(user), // body data type must match "Content-Type" header
        },
      );
      const res = await response.json();
      return res;
    };

    if (status === Status.FETCH) {
      userRequest()
        .then((res) => {
          setToken(res.token);
          setStatus(Status.OK);
        })
        .catch((err) => {
          setToken('');
          setStatus(Status.ERROR);
        });
    }
  }, [status, user, setToken, url]);

  const onSubmit = (data: User) => {
    setUser(data);
    setStatus(Status.FETCH);
  };

  return {
    status,
    onSubmit,
  };
};
