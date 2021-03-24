var express = require('express');
var router = express.Router();

/* Getting into home page*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
