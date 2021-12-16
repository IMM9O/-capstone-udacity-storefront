import { Request, Response } from 'express';
import { UserStore } from '../models/User';

/** CRUD Operations on product tables **/

// Get Users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await new UserStore().index();
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
    const product = await new UserStore().show(id);
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
    const addedUser = await new UserStore().create({
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
    const updatedUser = await new UserStore().update({
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
    const product = await new UserStore().delete(id);
    res.json(product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
