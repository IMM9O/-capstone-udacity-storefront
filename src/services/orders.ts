import { Request, Response } from 'express';
import { OrderStore } from '../models/Order';
import { OrderItem } from '../types/Order';

/** CRUD Operations on order tables **/
const store = new OrderStore();

// Get User Orders
export const getOrders = async (_req: Request, res: Response) => {
  try {
    // TODO: get user id from current loged in user
    const user_id: number = parseInt(_req.params.userId);
    const orders = await store.getUserOrders(user_id);
    res.json(orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export const getCompletedOrders = async (
  _req: Request,
  res: Response,
) => {
  try {
    // TODO: get user id from current loged in user
    const user_id: number = parseInt(_req.params.userId);
    const orders = await store.getUserCompletedOrders(user_id);
    res.json(orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export const getActiveOrders = async (
  _req: Request,
  res: Response,
) => {
  try {
    // TODO: get user id from current loged in user
    const user_id: number = parseInt(_req.params.userId);
    const orders = await store.getUserActiveOrders(user_id);
    res.json(orders);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Read
export const getOrder = async (_req: Request, res: Response) => {
  try {
    const id: number = parseInt(_req.params.id);
    const order = await store.show(id);
    res.json(order);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Create
export const addOrder = async (_req: Request, res: Response) => {
  // TODO: get user id from current loged in user
  const user_id: number = parseInt(_req.body.user_id);
  const status: string = _req.body.status;

  try {
    const addedOrder = await store.create({
      user_id,
      status,
    });
    res.json(addedOrder);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Update
export const updateOrder = async (_req: Request, res: Response) => {
  const id: number = parseInt(_req.params.id);
  // TODO: get user id from current loged in user
  const user_id: number = parseInt(_req.body.user_id);
  const status: string = _req.body.status;

  try {
    const updatedOrder = await store.update({
      id,
      user_id,
      status,
    });
    res.json(updatedOrder);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Delete
export const deleteOrder = async (_req: Request, res: Response) => {
  try {
    const id: number = parseInt(_req.params.id);
    const order = await store.delete(id);
    res.json(order);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export const addProduct = async (_req: Request, res: Response) => {
  try {
    const orderId: number = parseInt(_req.params.orderId);
    const payload = _req.body.products as OrderItem[];

    payload.forEach(async item => {
      await store.addProduct(orderId, item.product_id, item.quantity);
    });

    const products = await store.getOrderProducts(orderId);
    res.json(products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export const  getOrderProducts = async (_req: Request, res: Response) => {
  try {
    const orderId: number = parseInt(_req.params.orderId);
    const products = await store.getOrderProducts(orderId);
    res.json(products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
