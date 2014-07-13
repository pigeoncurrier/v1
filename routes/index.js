var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Pigeon', message:'here is the place where  everything started' });
});

module.exports = router;
