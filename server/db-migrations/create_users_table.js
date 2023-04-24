// @ts-check

export const up = (knex) =>
  knex.schema.createTable('users', (table) => {
    table.string('id').primary().notNullable();
    table.string('login').notNullable();
    table.string('email').notNullable();
    table.string('first_name');
    table.string('last_name');
    table.string('password').notNullable();
    table.string('phone_number');
    table.string('picture');
    table.boolean('active').notNullable().defaultTo(false);
    table.boolean('hidden').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

export const down = (knex) => knex.schema.dropTable('users');
