CREATE TABLE if not exists orders(
    id SERIAL PRIMARY KEY,
    user_id bigint,
    status VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);