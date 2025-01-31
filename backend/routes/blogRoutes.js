const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Define routes
router.get('/', blogController.getBlogData);
router.post('/', blogController.createBlogPost);

module.exports = router;