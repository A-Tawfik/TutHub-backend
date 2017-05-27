
exports.up = function(knex, Promise) {

  return knex.schema.createTable('users', function (table) {
    table.increments('id').unsigned().primary();
    table.string('username').notNull();
    table.string('password').notNull();
    table.timestamps();
    table.unique('username');
})

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
