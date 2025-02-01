const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/contact - Save a new contact message
router.post('/', contactController.saveMessage);

module.exports = router;