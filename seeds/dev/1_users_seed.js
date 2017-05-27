
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('tutorials').del()
  return knex('users').del()
    .then(function () {
  //     // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Amir', password: 'password'},
        {id: 2, username: 'Mary', password: 'password'},
        {id: 3, username: 'Gio', password: 'password'},
        {id: 4, username: 'Amir2', password: 'password'},
        {id: 5, username: 'Mary2', password: 'password'},
        {id: 6, username: 'Gio2', password: 'password'},
      ]);
    });

};
