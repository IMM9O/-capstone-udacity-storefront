import express from 'express';
import productsAPI from './api/products';
import ordersAPI from './api/orders';

const routes = express.Router();

routes.use('/products', productsAPI);
routes.use('/orders', ordersAPI);

export default routes;
