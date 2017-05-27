bookshelf = require('./dbconnect')

var Tag = bookshelf.Model.extend({
  tableName: 'tags',
  hasTimestamps: true,
  posts: function() {
    return this.hasMany(Post);
  }
})

module.exports = Tag
