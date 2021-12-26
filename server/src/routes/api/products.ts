import express from 'express';
import { verifyAuthToken } from '../../middleware/auth';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../../services/products';

const products = express.Router();

// Index
products.get('/', getProducts);

// Show (get Request)
products.get('/:id', getProduct);

// post request [token required]
products.post('/', [verifyAuthToken], createProduct);

// put request [token required]
products.put('/:id', [verifyAuthToken], updateProduct);

// delete request [token required]
products.delete('/:id', [verifyAuthToken], deleteProduct);

export default products;
