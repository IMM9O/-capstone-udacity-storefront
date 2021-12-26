export type Order = {
  id?: number;
  user_id: number;
  status: string;
};

export type OrderProduct = {
  name?: string;
  price: number;
  product_id: number;
  quantity: number;
};

export type OrderItem = {
  product_id: number;
  quantity: number;
};
