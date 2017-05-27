
exports.up = function(knex, Promise) {

  return knex.schema.createTable('ratings', function (table) {
    table.increments('id').unsigned().primary();
    table.integer('rating').notNull();
    table.integer('user_id').unsigned().notNull().references('id').inTable('users');
    table.integer('tutorial_id').unsigned().notNull().references('id').inTable('tutorials');
    table.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ratings')
};
