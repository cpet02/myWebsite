const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', (req, res) => {
    console.log(req.body); // Log to console
  
    contactController.saveMessage(req, res); // Save to MongoDB
  });
  
  module.exports = router;
  