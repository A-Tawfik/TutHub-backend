
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('tutorials').del()
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        {id: 1, is_up: true, user_id: 1, tutorial_id: 1 },
        {id: 2, is_up: true, user_id: 2, tutorial_id: 1 },
        {id: 3, is_up: true, user_id: 3, tutorial_id: 1 },
        {id: 4, is_up: true, user_id: 4, tutorial_id: 1 },
        {id: 5, is_up: true, user_id: 5, tutorial_id: 1 },
        {id: 6, is_up: true, user_id: 6, tutorial_id: 1 },
        {id: 7, is_up: true, user_id: 1, tutorial_id: 1 },
        {id: 8, is_up: true, user_id: 1, tutorial_id: 1 },
        {id: 9, is_up: false, user_id: 1, tutorial_id: 1 },
        {id: 10, is_up: false, user_id: 1, tutorial_id: 1},
        {id: 11, is_up: false, user_id: 1, tutorial_id: 1},
        {id: 12, is_up: false, user_id: 1, tutorial_id: 1}
      ]);
    });
};
