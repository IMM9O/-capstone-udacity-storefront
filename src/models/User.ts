import bcrypt from 'bcrypt';

import Client from '../config/database';
import { User } from '../types/User';

export class UserStore {
  async getEncryptedPassword(pass: string): Promise<string> {
    return await bcrypt.hash(pass, 10);
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

      const hashPassword = await this.getEncryptedPassword(p.password);
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
        "UPDATE users SET firstname=$1, lastname=$2, password=$3 WHERE id=$4 RETURNING *";
      const hashPassword = await this.getEncryptedPassword(p.password);
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
}
