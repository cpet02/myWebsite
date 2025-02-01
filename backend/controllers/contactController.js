const Contact = require('../models/Contact');

exports.saveMessage = async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Create a new Contact document
  const contactMessage = new Contact({ name, email, message });

  try {
    // 2. Save the document to MongoDB
    const savedMessage = await contactMessage.save();

    // 3. Return the saved document (should include _id, createdAt, etc.)
    res.status(201).json(savedMessage);
  } catch (err) {
    // 4. Handle errors (e.g., validation failures)
    res.status(400).json({ message: err.message });
  }
};