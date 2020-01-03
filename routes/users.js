var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var response = { status: true, message: "setup successfully", data: {} }
  res.send(response);
});

module.exports = router;
