// @ts-check

export const up = (knex) =>
  knex.schema.createTable('roles', (table) => {
    table.string('id').primary().notNullable();
    table.string('user_id').unsigned().index().references('users.id');
    table.string('role').notNullable();
  });

export const down = (knex) => knex.schema.dropTable('roles');
