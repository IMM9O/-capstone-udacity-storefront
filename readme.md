# Storefront

[![CircleCI](https://circleci.com/gh/IMM9O/udacity-storefront/tree/master.svg?style=svg)](http://storefront123.s3-website-us-east-1.amazonaws.com)

[Link To Live Web](http://storefront123.s3-website-us-east-1.amazonaws.com)

<p>

Full stack app built with Postgres-Express-React-Nodejs Stack, hosted on [AWS](https://aws.amazon.com/), and use [CircleCI](https://circleci.com/) as CI/CD.

</p>

<p align="center">
<img width="512" height="512" src="./docs/storefront-logo.png">
</p>

## Tech stack

- DB
    - postgres
- API
    - NodeJs
    - Typescript
    - ExpressJs
- UI
    - ReactJs
    - AntD
- Hosted
    - AWS
- CI/CD
    - CircleCI

## Installation

### Configuration

**Database Port:** 5432
**Server Port:** 3001
**Client Port:** 3000

### Setup

1. Installation is done using the [npm install command](https://docs.npmjs.com/downloading-and-installing-packages-locally): `npm install`

2. Open Sql Shell

3. Connect to the default postgres database `psql -U postgres`

4. In psql run the following to create the dev and test database

```sql
/** DEV database **/
CREATE DATABASE udacity_storefront_dev;
/** Test database **/
CREATE DATABASE udacity_storefront_test;
/** Production database **/
CREATE DATABASE udacity_storefront;
```

5. Setup database `npm run db:up`


6. Make a copy for `.env.example` file to `.env` file and then change the variables to match your environment

> Don't forget to replace {database_password} with your current postgres password

```env
NODE_ENV=dev
DB_HOST=127.0.0.1
DB_USER=postgres
DB_PASSWORD={database_password}
DB_DATABASE_DEV=udacity_storefront_dev
DB_DATABASE_TEST=udacity_storefront_test
DB_DATABASE_PROD=udacity_storefront
BCRYPT_PASSWORD=
SALT_ROUNDS=
TOKEN_SECRET=
```

7. To start the app run `npm start`

## Available scripts on client and server code

- To check app format run `npm run prettier`
- To check app error run `npm run lint`
- To test the app run `npm run test`
- To build the app run `npm run build`

## Database

Design and relationships ![Database Diagram](./docs/database.png 'Design and relationships')

Migrations ![Database Migrations](./docs/migration-screenshot.png 'Migrations')

## APIs

See also [REQUIREMENTS](./REQUIREMENTS.md)

<table>
    <th>
        <tr>
            <td>URL</td>
            <td>Type</td>
            <td>Token Required</td>
        </tr>
    </th>
    <tbody>
        <tr>
            <td>/api/products/</td>
            <td>GET</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>/api/products/:id</td>
            <td>GET</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>/api/products/</td>
            <td>POST</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/products/:id</td>
            <td>UPDATE</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/products/:id</td>
            <td>DELETE</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/users/</td>
            <td>GET</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/users/:id</td>
            <td>GET</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/users/</td>
            <td>POST</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>/api/users/:id</td>
            <td>UPDATE</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/users/:id</td>
            <td>DELETE</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/users/:id/authenticate</td>
            <td>POST</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>/api/orders/:userId</td>
            <td>GET</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/orders/completed/:userId</td>
            <td>GET</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/orders/active/:userId</td>
            <td>GET</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/orders/:id</td>
            <td>GET</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/orders/</td>
            <td>POST</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/orders/:id</td>
            <td>UPDATE</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/orders/:id</td>
            <td>DELETE</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/orders/:id/products</td>
            <td>POST</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>/api/orders/:id/products</td>
            <td>GET</td>
            <td>✔</td>
        </tr>
    <tbody>
</table>

## UI