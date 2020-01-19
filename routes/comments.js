var express = require('express');
var router = express.Router();

// Require our controllers.
var comment_controller = require('../controllers/commentController');

// GET request for fetching Comments.
router.get('/comments', comment_controller.fetch_comments_get);

// GET request for fetching Post details.
router.get('/comment/:id/upvote', comment_controller.upvote_comment_get);

// POST request for creating Comments.
router.post('/comment/create', comment_controller.comment_create_post);

module.exports = router;