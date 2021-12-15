import express from 'express';

const orders = express.Router();

// Current Order by user (args: user id)[token required]
orders.get('/:userId', (req, res) =>
  res.send(`List of orders for specific user = ${req.params.userId}`),
);


export default orders;
