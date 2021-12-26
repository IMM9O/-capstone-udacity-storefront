CREATE TABLE if not exists users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(250),
    password VARCHAR(250)
);