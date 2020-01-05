var express = require('express');
var router = express.Router();

// Require our controllers.
var post_controller = require('../controllers/postController');

// POST request for creating Post.
router.post('/post/create', post_controller.post_create_post);

module.exports = router;
