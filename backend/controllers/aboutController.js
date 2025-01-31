const getAboutData = (req, res) => {
    res.json({ message: 'About data from the backend!' });
  };
  
  module.exports = {
    getAboutData,
  };