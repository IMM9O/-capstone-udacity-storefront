import { Request, Response } from 'express';
import { UserStore } from '../models/User';
import jwt from 'jsonwebtoken';

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
export const createUser = async (_req: Request, res: Response) => {
  const firstname: string = _req.body.firstname;
  const lastname: string = _req.body.lastname;
  const password: string = _req.body.password;

  try {
    const addedUser = await store.create({
      firstname,
      lastname,
      password,
    });

    const token = jwt.sign(
      {
        firstname: addedUser.firstname,
        lastname: addedUser.lastname,
      },
      process.env.TOKEN_SECRET as string,
    );

    res.json(token);
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

// authenticate
export const authenticate = async (_req: Request, res: Response) => {
  try {
    const id: number = parseInt(_req.params.id);
    const plainPassword = _req.body.password;
    const user = await store.authenticate(id, plainPassword);

    if (user) {
      const token = jwt.sign(
        {
          firstname: user.firstname,
          lastname: user.lastname,
        },
        process.env.TOKEN_SECRET as string,
      );

      res.json(token);
    } else {
      res.status(404);
      res.json({ error: 'User Not Found!' });
    }
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
