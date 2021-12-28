import Client from '../config/database';
import { Product } from '../types/Product';

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get products ${err}`);
    }
  }
  async create(p: Product): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO products (name, price, category, image_url) VALUES ($1, $2, $3, $4) RETURNING *';
      const result = await conn.query(sql, [
        p.name,
        p.price,
        p.category,
        p.image_url,
      ]);

      const product = result.rows[0];
      conn.release();
      return product;
    } catch (err) {
      throw new Error(`Cannot inset into products ${err}`);
    }
  }
  async show(id: number): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products WHERE id=$1';
      const result = await conn.query(sql, [id]);
      const product = result.rows[0];
      conn.release();
      return product;
    } catch (err) {
      throw new Error(`Cannot Show this product ${err}`);
    }
  }
  async update(p: Product): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql =
        'UPDATE products SET name=$1, price=$2, category=$3, image_url=$4 WHERE id=$5 RETURNING *';
      const result = await conn.query(sql, [
        p.name,
        p.price,
        p.category,
        p.image_url,
        p.id,
      ]);
      const product = result.rows[0];
      conn.release();
      return product;
    } catch (err) {
      throw new Error(`Cannot Show this product ${err}`);
    }
  }
  async delete(id: number): Promise<Product> {
    try {
      const conn = await Client.connect();
      const sql = 'DELETE FROM products WHERE id=$1 RETURNING *';
      const result = await conn.query(sql, [id]);
      const product = result.rows[0];
      conn.release();
      return product;
    } catch (err) {
      throw new Error(`Cannot delete this product ${err}`);
    }
  }
}
