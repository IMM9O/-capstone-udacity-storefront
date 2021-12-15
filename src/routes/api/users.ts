import express from 'express';

const users = express.Router();

// Index [token required]
users.get('/', (req, res) => res.send('All users'));

// Show (get Request) [token required]
users.get('/:id', (req, res) =>
  res.send(`You are view user id = ${req.params.id}`),
);

// post request [token required]
users.post('/', (req, res) =>
  res.send('User created successfully'),
);

export default users;
