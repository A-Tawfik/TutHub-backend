
exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', function (table) {
    table.increments('id').unsigned().primary();
    table.string('username').unique().notNullable();
    table.string('password').notNullable();
    table.boolean('admin').notNullable().defaultTo(false);
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.unique('username');
})

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
