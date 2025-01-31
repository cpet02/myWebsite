const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// Define routes
router.get('/', portfolioController.getPortfolioData);

module.exports = router;