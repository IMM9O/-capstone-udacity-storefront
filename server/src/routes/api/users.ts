import express from 'express';
import { verifyAuthToken } from '../../middleware/auth';
import {
  createUser,
  authenticate,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../../services/users';

const users = express.Router();

// Index [token required]
users.get('/', [verifyAuthToken], getUsers);

// post request [token required]
users.post('/', [verifyAuthToken], createUser);

// Show (get Request) [token required]
users.get('/:id', [verifyAuthToken], getUser);

// put request [token required]
users.put('/:id', [verifyAuthToken], updateUser);

// delete request [token required]
users.delete('/:id', [verifyAuthToken], deleteUser);

users.post('/signup', createUser);
users.post('/login', authenticate);

export default users;
