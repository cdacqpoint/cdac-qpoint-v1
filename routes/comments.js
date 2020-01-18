var express = require('express');
var router = express.Router();

// Require our controllers.
var comment_controller = require('../controllers/commentController');


// POST request for creating Comments.
router.post('/comment/create', comment_controller.comment_create_post);

module.exports = router;