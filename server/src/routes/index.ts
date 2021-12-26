import express from 'express';
import productsAPI from './api/products';
import usersAPI from './api/users';
import ordersAPI from './api/orders';

const routes = express.Router();

routes.use('/products', productsAPI);
routes.use('/users', usersAPI);
routes.use('/orders', ordersAPI);

export default routes;
