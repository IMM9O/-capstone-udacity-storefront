import express from 'express';
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../../services/users';

const users = express.Router();

// Index [token required]
users.get('/', getUsers);

// post request [token required]
users.post('/', addUser);

// Show (get Request) [token required]
users.get('/:id', getUser);

// put request [token required]
users.put('/:id', updateUser);

// delete request [token required]
users.delete('/:id', deleteUser);

export default users;
