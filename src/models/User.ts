import bcrypt from 'bcrypt';

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
        'INSERT INTO users (firstname, lastname, password) VALUES ($1, $2, $3) RETURNING *';

      const hashPassword = this.getEncryptedPassword(
        p.password as string,
      );
      const result = await conn.query(sql, [
        p.firstname,
        p.lastname,
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
        'UPDATE users SET firstname=$1, lastname=$2, password=$3 WHERE id=$4 RETURNING *';
      const hashPassword = this.getEncryptedPassword(
        p.password as string,
      );
      const result = await conn.query(sql, [
        p.firstname,
        p.lastname,
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
    id: number,
    password: string,
  ): Promise<User | null> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users WHERE id=$1';
      const result = await conn.query(sql, [id]);

      if (result.rows.length) {
        const user = result.rows[0];
        console.log(user);
        if (
          bcrypt.compareSync(
            password + process.env.BCRYPT_PASSWORD,
            user.password,
          )
        ) {
          return user;
        }
      }

      return null;
    } catch (err) {
      throw new Error(`Cannot delete this User ${err}`);
    }
  }
}
