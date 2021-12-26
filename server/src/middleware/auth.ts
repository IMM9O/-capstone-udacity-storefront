import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyAuthToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authorizationHeader = req.headers.authorization;
    /*
     * When we use JWTs, we pass them as a special header called the Authorization header using this format:
     * Authorization: Bearer <token>
     * Where Bearer is a string separated by the token with a space.
     */
    const token = ((authorizationHeader as unknown) as string).split(
      ' ',
    )[1];
    jwt.verify(token, process.env.TOKEN_SECRET as string);
    next();
  } catch (error) {
    res.status(401);
    res.json('Access denied, invalid token');
  }
};
