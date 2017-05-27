const connectionString = process.env.DATABASE_URL || `127.0.0.1:5432`;
var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'tuthub'
  },
  // client: 'pg',
  debug: true
  // connection: {
  //   host: '127.0.0.1',
  //   port: 5432,
  //   database: 'tuthub'
  // }
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf
