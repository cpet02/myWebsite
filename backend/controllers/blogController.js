const getBlogData = (req, res) => {
    res.json({ message: 'Blog data from the backend!' });
  };
  
  const createBlogPost = (req, res) => {
    const { title, content } = req.body;
    // Save blog post to database (not implemented here)
    res.json({ message: 'Blog post created!', title, content });
  };
  
  module.exports = {
    getBlogData,
    createBlogPost,
  };