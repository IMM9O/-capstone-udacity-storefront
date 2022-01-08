import Client from '../config/database';
import { Order, OrderProduct } from '../types/Order';

export class OrderStore {
  /************************[CRUD operation] ****************************/
  async create(p: Order): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql =
        'INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *';
      const result = await conn.query(sql, [p.user_id, p.status]);
      const order = result.rows[0] as Order;

      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Cannot inset into products ${err}`);
    }
  }
  async show(id: number): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders WHERE id=$1';
      const result = await conn.query(sql, [id]);
      const order = result.rows[0] as Order;
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Cannot Show this order ${err}`);
    }
  }
  async update(p: Order): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql =
        'UPDATE orders SET user_id=$1, status=$2 WHERE id=$3 RETURNING *';
      const result = await conn.query(sql, [
        p.user_id,
        p.status,
        p.id,
      ]);
      const order = result.rows[0] as Order;
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Cannot Show this order ${err}`);
    }
  }
  async delete(id: number): Promise<Order> {
    try {
      const conn = await Client.connect();
      const sql = 'DELETE FROM orders WHERE id=$1 RETURNING *';
      const result = await conn.query(sql, [id]);
      const order = result.rows[0] as Order;
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Cannot delete this order ${err}`);
    }
  }

  /*********************[User -> Orders]*******************************/
  async getUserOrders(user_id: number): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders WHERE user_id=$1';
      const result = await conn.query(sql, [user_id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get user orders ${err}`);
    }
  }
  async getUserCompletedOrders(user_id: number): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql =
        'SELECT * FROM orders WHERE user_id=$1 AND status=$2';
      const result = await conn.query(sql, [user_id, 'completed']);
      const order = result.rows as Order[];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Cannot inset into orders ${err}`);
    }
  }
  async getUserActiveOrders(user_id: number): Promise<Order[]> {
    try {
      const conn = await Client.connect();
      const sql =
        'SELECT * FROM orders WHERE user_id=$1 AND status=$2';
      const result = await conn.query(sql, [user_id, 'active']);
      const order = result.rows as Order[];
      conn.release();
      return order;
    } catch (err) {
      throw new Error(`Cannot inset into orders ${err}`);
    }
  }

  /*********************[Order -> Products]****************************/
  async getOrderProducts(order_id: number): Promise<OrderProduct[]> {
    try {
      const conn = await Client.connect();
      const sql = `SELECT p.id as product_id, p.name, p.price, op.quantity FROM products p INNER JOIN order_products op on p.id = op.product_id INNER JOIN orders o on op.order_id = o.id WHERE o.id=$1`;
      const result = await conn.query(sql, [order_id]);
      const orderProducts = result.rows as OrderProduct[];
      conn.release();
      return orderProducts;
    } catch (err) {
      throw new Error(`Cannot get order products ${err}`);
    }
  }
  async addOrderProduct(
    orderId: number,
    productId: number,
    quantity: number,
  ): Promise<OrderProduct> {
    try {
      const sql =
        'INSERT INTO order_products (order_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *';
      const conn = await Client.connect();

      const result = await conn.query(sql, [
        orderId,
        productId,
        quantity,
      ]);

      const order = result.rows[0] as OrderProduct;

      conn.release();

      return order;
    } catch (err) {
      throw new Error(
        `Could not add product ${productId} to order ${orderId}: ${err}`,
      );
    }
  }
}
