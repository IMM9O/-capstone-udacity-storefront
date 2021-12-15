import express from 'express';

const products = express.Router();

// Index
products.get('/', (req, res) => res.send('Index Route'));

// Show (get Request)
products.get('/:id', (req, res) =>
  res.send(`You are view product id = ${req.params.id}`),
);

// post request [token required]
products.post('/', (req, res) =>
  res.send('The product created successfully'),
);

export default products;
