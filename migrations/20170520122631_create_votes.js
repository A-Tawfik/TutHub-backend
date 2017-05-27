
exports.up = function(knex, Promise) {

  return knex.schema.createTable('votes', function (table) {
    table.increments('id').unsigned().primary();
    table.boolean('is_up').notNull();
    table.integer('user_id').unsigned().notNull();
    table.integer('tutorial_id').unsigned().notNull();
    table.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('votes')
};
