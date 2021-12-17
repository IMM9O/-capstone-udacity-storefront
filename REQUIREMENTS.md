# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- ✅ Index `GET [/api/products/]`
- ✅ Show `GET [/api/products/:id]`
- 🚧 Create `POST [/api/products/]` [token required]
- 🎯 [OPTIONAL] Top 5 most popular products 
- 🎯 [OPTIONAL] Products by category (args: product category)
- 🚀 [Added] Update `PUT [/api/products/]` [token required]
- 🚀 [Added] Delete `DELETE [/api/products/]` [token required]

#### Users
- 🚧 Index `GET [/api/users/]` [token required]
- 🚧 Show `GET [/api/users/:id]` [token required]
- 🚧 Create `POST [/api/users/]` [token required]
- 🚀 [Added] Update `PUT [/api/users/]` [token required]
- 🚀 [Added] Delete `DELETE [/api/users/]` [token required]

#### Orders
- 🚧 Current Order by user (args: user id) `GET [/api/orders/:userId]` [token required]
- 🚧 [OPTIONAL] Completed Orders by user (args: user id) `GET [/api/orders/completed/:userId]` [token required]
- 🚀 [Added] Show `GET [/api/orders/:id]` [token required]
- 🚀 [Added] Create `POST [/api/orders/]` [token required]
- 🚀 [Added] Update `PUT [/api/orders/]` [token required]
- 🚀 [Added] Delete `DELETE [/api/orders/]` [token required]
- 🚀 [Added] Active orders by user (args: user id) `GET [/api/orders/active/:userId]` [token required]
- 🚀 [Added] Add products to order `POST [/api/orders/product/:orderId]` [token required]
- 🚀 [Added] Get order products `GET [/api/orders/product/:orderId]` [token required]

## Data Shapes
#### Product
- id
- name
- price
- [OPTIONAL] category

```sql

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price INTEGER NOT NULL,
    category VARCHAR(50)
);

```

#### User
- id
- firstName
- lastName
- password

```sql

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    password VARCHAR(250)
);

```

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

```sql

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id bigint,
    status VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id bigint,
    product_id bigint,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

```

