import express from 'express';
import { verifyAuthToken } from '../../middleware/auth';
import {
  addOrder,
  deleteOrder,
  getActiveOrders,
  getCompletedOrders,
  getOrder,
  getOrders,
  updateOrder,
  addOrderProduct,
  getOrderProducts,
} from '../../services/orders';

const orders = express.Router();

// Index [token required]
orders.get('/:userId', [verifyAuthToken], getOrders);

// Get Competed Orders
orders.get(
  '/completed/:userId',
  [verifyAuthToken],
  getCompletedOrders,
);
// Get Active Orders
orders.get('/active/:userId', [verifyAuthToken], getActiveOrders);

// post request [token required]
orders.post('/', [verifyAuthToken], addOrder);

// show request [token required]
orders.get('/:id', [verifyAuthToken], getOrder);

// put request [token required]
orders.put('/:id', [verifyAuthToken], updateOrder);

// delete request [token required]
orders.delete('/:id', [verifyAuthToken], deleteOrder);

// add products to order [token required]
orders.post('/:id/products', [verifyAuthToken], addOrderProduct);

// get order products [token required]
orders.get('/:id/products', [verifyAuthToken], getOrderProducts);

export default orders;
