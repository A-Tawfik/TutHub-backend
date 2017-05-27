
exports.up = function(knex, Promise) {

  return knex.schema.createTable('tutorials', function (table) {
    table.increments('id').unsigned().primary();
    table.integer('user_id').unsigned().notNull().references('id').inTable('users');
    table.string('title').notNull();
    table.string('url');
    table.text('content');
    table.decimal('price', 8, 2);
    table.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tutorials')
};
