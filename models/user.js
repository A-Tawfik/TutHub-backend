bookshelf = require('./dbconnect')

var User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,

    posts: function() {
      return this.hasMany(Post, 'user_id');
    }
  },{
    getPosts: function() {
      this.posts().fetch();
    },
    allPosts: function(id) {
      return this.forge().where({id:id}).fetchAll({withRelated: ['posts']});
    }
  });

// User.forge({id: 1}).fetch({withRelated: ['posts']})
// .then(function(user) {
//     console.log('Got user:', user.get('username'));
//     console.log('Got posts:', user.related('posts').map(post=> {return post.get('content')})[0]);
// });

// User.forge().fetchAll({withRelated: ['posts']}).then(users => {console.log(JSON.stringify(users))})
// User.allPosts(1).then(users => {console.log(JSON.stringify(users))});
// var user;
// User.forge({id:1}).fetch().then(u=> {user=u})
//
// console.log(user.getPosts())




module.exports = User;
