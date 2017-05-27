
exports.up = function(knex, Promise) {
  return knex.schema.table('votes', function (table) {
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('tutorial_id').references('id').inTable('tutorials');

  })

};

exports.down = function(knex, Promise) {
  
  return knex.schema.table('votes', function (table) {
    table.dropForeign('user_id');
    table.dropForeign('tutorial_id');
  })

};
