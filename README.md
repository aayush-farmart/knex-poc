# Express.js, Knex.js, and PostgreSQL Proof of Concept

This repository contains a Proof of Concept (PoC) project that demonstrates the integration of Express.js, Knex.js, and PostgreSQL to create a simple RESTful API.

## Overview

In this PoC, we've created a basic Express.js application that interacts with a PostgreSQL database using the Knex.js query builder. The project demonstrates the following concepts:

- Setting up an Express.js server.
- Configuring Knex.js for PostgreSQL.
- Creating database schema migrations using Knex.js.
- Creating a seed file for the database using Knex.js.
- Implementing CRUD (Create, Read, Update, Delete) operations using Knex.js.
- Using TypeScript for strong typing and ES6 import/export syntax.

## Prerequisites

Before running the project, ensure you have the following prerequisites installed on your system:

- Node.js and npm (Node Package Manager)
- PostgreSQL

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    cd knex-poc
    ```

2. Install project dependencies:

    ```bash
    npm install 
    ```

## Usage
1. Configure the PostgreSQL connection settings in `src/knexfile.ts`.

2. Knex.js generates migration files for you. Run the following command to generate a migration file:

    ```bash
    npx knex migrate:make create_users_table
    ```

    This will create a file of the form `timestamp_create_users_table` in the migrations folder. Inside the migration file, two skeleton functions are defined: `up()` and `down()`.
    A sample migration file is provided in this repository, with both the `up()` and `down()` functions defined. You can create your own migration script, or run the one provided.

3. Run the migration file using the following command:

    ```bash
    npx knex migrate:latest --knexfile src/knexfile.ts
    ```

    This command runs the migration script with the latest timestamp. Upon completion, you will find that the table defined in the migration script will be created in your database.

4. Create a seed file to populate the database with sample data:

    ```bash
    npx knex seed:make seed_users
    ```

    This command will create a `seed_users.ts` file in the `seeds` folder. A sample file is provided. You can create your own file or edit the existing one and insert data according to your own needs.

5. Run the `seed_users` script with the following command:

    ```bash
    npx knex seed:run --knexfile src/knexfile.ts
    ```

    This will insert the rows defined in your seed file to the database.

Now that you have created a database and inserted some sample data into it, you can test out the server.

Start the express.js server:
```bash
npm start
```
The server should be running at `http://localhost:3000`.

The following endpoints have been defined in this application:

- `GET /users`: Retrieve a list of all the users in the database.
- `GET /user/:id`: Retrieve the data of one user whose id is provided.
- `POST /user`: Create a new user.
- `PUT /user/:id`: Update a user by id.
- `DELETE /user/:id`: Delete a user by id.


