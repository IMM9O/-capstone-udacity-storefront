import { Request, Response } from 'express';
import { ProductStore } from '../models/Product';

/** CRUD Operations on product tables **/
const store = new ProductStore();

// Get Products
export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await new ProductStore().index();
    res.json(products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Read
export const getProduct = async (_req: Request, res: Response) => {
  try {
    const id: number = parseInt(_req.params.id);
    const product = await new ProductStore().show(id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Create
export const addProduct = async (_req: Request, res: Response) => {
  const name: string = _req.body.name;
  const category: string = _req.body.category;
  const price: number = parseInt(_req.body.price);

  try {
    const addedProduct = await new ProductStore().create({
      name,
      price,
      category,
    });
    res.json(addedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Update
export const updateProduct = async (_req: Request, res: Response) => {
  const id: number = parseInt(_req.params.id);
  const name: string = _req.body.name;
  const price: number = parseInt(_req.body.price);
  const category: string = _req.body.category;

  try {
    const updatedProduct = await new ProductStore().update({
      id,
      name,
      category,
      price,
    });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Delete
export const deleteProduct = async (_req: Request, res: Response) => {
  try {
    const id: number = parseInt(_req.params.id);
    const product = await new ProductStore().delete(id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
