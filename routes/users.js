var express = require('express');
var router = express.Router();
var mailer = require('../helpers/mailer')

/* GET users listing. */
router.get('/', function (req, res, next) {
  mailer.init("sai@example.com", "Hello Macha", "<h1>Hello Macha</h1>").sendReachingOutMessage("John Doe","Rock Macha Pwoli Macha").catch(console.log);
  console.log("heelo ", mailer.getMailOptions())
  var response = { status: true, message: "setup successfully", data: {} }
  res.send(response);
});

module.exports = router;
