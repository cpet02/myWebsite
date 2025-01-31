const getContactData = (req, res) => {
    res.json({ message: 'Contact data from the backend!' });
  };
  
  const submitContactForm = (req, res) => {
    const { name, email, message } = req.body;
    // Process contact form submission (not implemented here)
    res.json({ message: 'Contact form submitted!', name, email, message });
  };
  
  module.exports = {
    getContactData,
    submitContactForm,
  };