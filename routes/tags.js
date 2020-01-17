var express = require('express');
var router = express.Router();

// Require our controllers.
var tag_controller = require('../controllers/tagsController');

// GET request for creating Post.
router.get('/tags', tag_controller.tag_details_get);

module.exports = router;