import bcrypt from 'bcryptjs';

import Client from '../config/database';
import { User } from '../types/User';

export class UserStore {
  getEncryptedPassword(pass: string): string {
    return bcrypt.hashSync(
      pass + process.env.BCRYPT_PASSWORD,
      parseInt(process.env.SALT_ROUNDS as string),
    );
  }
  async index(): Promise<User[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * from users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get users ${err}`);
    }
  }
  async create(p: User): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *';

      const hashPassword = this.getEncryptedPassword(
        p.password as string,
      );
      const result = await conn.query(sql, [
        p.firstname,
        p.lastname,
        p.email,
        hashPassword,
      ]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Cannot inset into users ${err}`);
    }
  }
  async show(id: number): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users WHERE id=$1';
      const result = await conn.query(sql, [id]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Cannot Show this User ${err}`);
    }
  }
  async update(p: User): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql =
        'UPDATE users SET firstname=$1, lastname=$2, email=$3, password=$4 WHERE id=$5 RETURNING *';
      const hashPassword = this.getEncryptedPassword(
        p.password as string,
      );
      const result = await conn.query(sql, [
        p.firstname,
        p.lastname,
        p.email,
        hashPassword,
        p.id,
      ]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Cannot Show this User ${err}`);
    }
  }
  async delete(id: number): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql = 'DELETE FROM users WHERE id=$1 RETURNING *';
      const result = await conn.query(sql, [id]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Cannot delete this User ${err}`);
    }
  }
  async authenticate(
    email: string,
    password: string,
  ): Promise<User | null> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users WHERE email=$1';
      const result = await conn.query(sql, [email]);

      if (result?.rows?.length) {
        const user = result.rows[0];
        const validPassword = await bcrypt.compare(
          password + process.env.BCRYPT_PASSWORD,
          user.password,
        );

        if (validPassword) {
          conn.release();
          return user;
        }
      }
      conn.release();
      return null;
    } catch (err) {
      throw new Error(`Cannot delete this User ${err}`);
    }
  }
}
