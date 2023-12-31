import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema("public")
    .createTable("users", function (table) {
      table.increments("id").primary();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
