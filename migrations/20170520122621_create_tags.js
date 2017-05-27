
exports.up = function(knex, Promise) {

  return knex.schema.createTable('tags', function (table) {
    table.increments('id').unsigned().primary();
    table.string('name').notNull();
    table.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags')
};
