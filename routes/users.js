var express = require('express');
var router = express.Router();
var users = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  users = users + 1;
  res.send('Users accesses are:' + users);
});

module.exports = router;
