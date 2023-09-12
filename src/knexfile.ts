// src/knexfile.ts
import { Knex } from "knex";

export const development: Knex.Config = {
  client: "pg",
  connection: {
    host: "localhost", // Replace with your PostgreSQL host
    user: "postgres", // Replace with your PostgreSQL username
    password: "password", // Replace with your PostgreSQL password
    database: "local", // Replace with your PostgreSQL database name
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
