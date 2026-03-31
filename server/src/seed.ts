import { ProductStore } from './models/Product';
import { UserStore } from './models/User';
import { OrderStore } from './models/Order';

const productStore = new ProductStore();
const userStore = new UserStore();
const orderStore = new OrderStore();

const seedProducts = async () => {
  const products = [
    { name: 'Wireless Headphones', price: 19999, category: 'Electronics', image_url: 'https://placehold.co/400' },
    { name: 'Smart Watch', price: 29999, category: 'Electronics', image_url: 'https://placehold.co/400' },
    { name: 'Running Shoes', price: 8999, category: 'Sports', image_url: 'https://placehold.co/400' },
    { name: 'Yoga Mat', price: 2999, category: 'Sports', image_url: 'https://placehold.co/400' },
    { name: 'Coffee Maker', price: 14999, category: 'Home', image_url: 'https://placehold.co/400' },
    { name: 'Desk Lamp', price: 4999, category: 'Home', image_url: 'https://placehold.co/400' },
    { name: 'Backpack', price: 5999, category: 'Accessories', image_url: 'https://placehold.co/400' },
    { name: 'Sunglasses', price: 12999, category: 'Accessories', image_url: 'https://placehold.co/400' },
  ];

  for (const product of products) {
    await productStore.create(product);
  }
  console.log('Products seeded successfully');
};

const seedUsers = async () => {
  const users = [
    { firstname: 'John', lastname: 'Doe', email: 'john@example.com', password: 'password123' },
    { firstname: 'Jane', lastname: 'Smith', email: 'jane@example.com', password: 'password123' },
    { firstname: 'Bob', lastname: 'Wilson', email: 'bob@example.com', password: 'password123' },
  ];

  for (const user of users) {
    await userStore.create(user);
  }
  console.log('Users seeded successfully');
};

const seedOrders = async () => {
  const orders = [
    { user_id: 1, status: 'completed' },
    { user_id: 1, status: 'active' },
    { user_id: 2, status: 'completed' },
  ];

  for (const order of orders) {
    await orderStore.create(order);
  }

  await orderStore.addOrderProduct(1, 1, 2);
  await orderStore.addOrderProduct(1, 3, 1);
  await orderStore.addOrderProduct(2, 2, 1);
  await orderStore.addOrderProduct(3, 5, 1);
  await orderStore.addOrderProduct(3, 6, 3);

  console.log('Orders seeded successfully');
};

const seed = async () => {
  try {
    await seedUsers();
    await seedProducts();
    await seedOrders();
    console.log('All seeds completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seed();
