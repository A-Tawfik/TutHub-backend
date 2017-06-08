var express = require('express');
var router = express.Router();
var bookshelf = require('../models/dbconnect.js');
var DB = require('../models/Models.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/users', function(req, res, next) {
  DB.User.forge()
  .fetchAll({withRelated: ['posts']})
  .then(users => {
    res.json({ users })
  });
});

router.get('/api/posts', function(req,res, next) {
  DB.Post.forge()
  .fetchAll({withRelated: ['user', 'votes']})
  .then(posts => {
    res.json({ posts })
  });
});

module.exports = router;
