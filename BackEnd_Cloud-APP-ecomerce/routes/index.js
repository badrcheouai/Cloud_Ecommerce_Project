var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'FD E-Commerce Backend API is running!' });
});

module.exports = router;
