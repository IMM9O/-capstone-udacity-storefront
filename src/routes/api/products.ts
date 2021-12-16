import express from 'express';
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../../services/products';

const products = express.Router();

// Index
products.get('/', getProducts);

// post request [token required]
products.post('/', addProduct);

// Show (get Request)
products.get('/:id', getProduct);

// put request [token required]
products.put('/:id', updateProduct);

// delete request [token required]
products.delete('/:id', deleteProduct);

export default products;
