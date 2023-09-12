import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    { id: 1, first_name: "John", last_name: "Doe" },
    { id: 2, first_name: "Jane", last_name: "Doe" },
  ]);
}
