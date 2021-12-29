import { Request, Response } from 'express';
import { ProductStore } from '../models/Product';

/** CRUD Operations on product tables **/
const store = new ProductStore();

// Get Products
export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await store.index();
    res.json(products);
  } catch (err) {
    res.status(400);
    res.json({ err });
  }
};

// Read
export const getProduct = async (_req: Request, res: Response) => {
  try {
    const id: number = parseInt(_req.params.id);
    const product = await store.show(id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json({ err });
  }
};

// Create
export const createProduct = async (_req: Request, res: Response) => {
  const name: string = _req.body.name;
  const category: string = _req.body.category;
  const image_url: string = _req.body.image_url;
  const price: number = parseInt(_req.body.price);

  try {
    const addedProduct = await store.create({
      name,
      price,
      category,
      image_url,
    });
    res.json(addedProduct);
  } catch (err) {
    res.status(400);
    res.json({ err });
  }
};

// Update
export const updateProduct = async (_req: Request, res: Response) => {
  const id: number = parseInt(_req.params.id);
  const name: string = _req.body.name;
  const image_url: string = _req.body.image_url;
  const price: number = parseInt(_req.body.price);
  const category: string = _req.body.category;

  try {
    const updatedProduct = await store.update({
      id,
      name,
      category,
      image_url,
      price,
    });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400);
    res.json({ err });
  }
};

// Delete
export const deleteProduct = async (_req: Request, res: Response) => {
  try {
    const id: number = parseInt(_req.params.id);
    const product = await store.delete(id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json({ err });
  }
};
