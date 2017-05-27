
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tutorials_tags', function (table) {
    table.increments('id').unsigned().primary();
    table.integer('tag_id').unsigned().notNull().references('id').inTable('tags');
    table.integer('tutorial_id').unsigned().notNull().references('id').inTable('tutorials');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tutorials_tags');
};
