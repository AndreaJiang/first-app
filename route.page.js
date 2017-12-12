var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET posts page. */
router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'posts'} );
  console.log ("GET posts page");
});


/* GET posts create page. */
router.get('/posts/create', function(req, res, next) {
  res.render('create');
  console.log( '得到create页面' );
});

/* GET posts show page. */
router.get('/posts/show', function (req, res, next) {
  var id = req.query.id;

  PostModel.findOne({_id: id}, function (err, post) {
    res.render('show', {post});
  });
  console.log ("get posts show page")
});

module.exports = router;