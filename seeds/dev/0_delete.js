
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('votes').del()
  return knex('tutorials').del()
  return knex('users').del()
};
