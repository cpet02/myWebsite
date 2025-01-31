const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define routes
router.get('/', contactController.getContactData);
router.post('/', contactController.submitContactForm);

module.exports = router;