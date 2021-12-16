import { Request, Response } from 'express';
import { UserStore } from '../models/User';

/** CRUD Operations on product tables **/
const store = new UserStore();

// Get Users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await store.index();
    res.json(users);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Read
export const getUser = async (_req: Request, res: Response) => {
  try {
    const id: number = parseInt(_req.params.id);
    const product = await store.show(id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Create
export const addUser = async (_req: Request, res: Response) => {
  const firstname: string = _req.body.firstname;
  const lastname: string = _req.body.lastname;
  const password: string = _req.body.password;

  try {
    const addedUser = await store.create({
      firstname,
      lastname,
      password,
    });
    res.json(addedUser);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Update
export const updateUser = async (_req: Request, res: Response) => {
  const id: number = parseInt(_req.params.id);
  const firstname: string = _req.body.firstname;
  const lastname: string = _req.body.lastname;
  const password: string = _req.body.password;

  try {
    const updatedUser = await store.update({
      firstname,
      lastname,
      password,
      id,
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

// Delete
export const deleteUser = async (_req: Request, res: Response) => {
  try {
    const id: number = parseInt(_req.params.id);
    const product = await store.delete(id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
