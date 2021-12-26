CREATE TABLE if not exists products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price INTEGER NOT NULL,
    image_url VARCHAR(250),
    category VARCHAR(50)
);