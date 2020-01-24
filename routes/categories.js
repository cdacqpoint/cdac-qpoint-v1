var express = require('express');
var router = express.Router();

// Controllers required for category
var category_controller = require('../controllers/categoriesController');

// GET request for getting categories
router.get('/categories', category_controller.fetch_categories_get);

router.post('/category/create', category_controller.post_create_category);

module.exports = router;