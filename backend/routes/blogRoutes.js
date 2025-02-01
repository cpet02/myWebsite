const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Ensure "getPosts" is exported in blogController.js
router.get("/blog", blogController.getPosts); // <-- Fix this line
router.post("/blog", blogController.createPost);

module.exports = router;