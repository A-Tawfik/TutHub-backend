bookshelf = require('./dbconnect');

var Vote = bookshelf.Model.extend({
  tableName: 'votes',
  hasTimestamps: true,
  posts: function() {
    return  this.hasMany(Post)
  },
  user: function() {
    return this.belongsTo(User)
  }
},{
  total: function(post_id) {
    var downs = 0;
    var ups = 0;

    return this.forge().where({tutorial_id:post_id}).fetchAll().then(v=> {
        v.models.map(model =>{
          if (model.attributes.is_up) {
            ups++
          } else {
            downs++
          }
        })
        return ups - downs
      });
  }
})

module.exports = Vote;
