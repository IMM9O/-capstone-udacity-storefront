import express from 'express';
import {
  addOrder,
  deleteOrder,
  getActiveOrders,
  getCompletedOrders,
  getOrder,
  getOrders,
  updateOrder,
  addProduct,
  getOrderProducts,
} from '../../services/orders';

const orders = express.Router();

// Index [token required]
orders.get('/:userId', getOrders);

// Get Competed Orders
orders.get('/completed/:userId', getCompletedOrders);
// Get Active Orders
orders.get('/active/:userId', getActiveOrders);

// post request [token required]
orders.post('/', addOrder);

// show request [token required]
orders.get('/:id', getOrder);

// put request [token required]
orders.put('/:id', updateOrder);

// delete request [token required]
orders.delete('/:id', deleteOrder);

// add products to order [token required]
orders.post('/product/:orderId', addProduct);

// get order products [token required]
orders.get('/product/:orderId', getOrderProducts);

export default orders;
