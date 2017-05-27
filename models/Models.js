Post = require('./post');
User = require('./user');
Vote = require('./vote');
Tag = require('./tag');


const DB = {
  Post: Post,
  User: User,
  Vote: Vote,
  Tag: Tag
}


// Vote.total(1)
//
// DB.Vote.total(1)

module.exports = DB;
