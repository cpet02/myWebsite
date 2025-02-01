const Post = require('../models/Post');

// 1. Ensure this function is exported
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ posts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPost = async (req, res) => {
  const { title, content, albumArtist, albumTitle, rating } = req.body;
  console.log('Received data:', { title, content, albumArtist, albumTitle, rating });

  const post = new Post({
    title,
    content,
    albumArtist,
    albumTitle,
    rating
  });

  try {
    const savedPost = await post.save();
    console.log('Post saved:', savedPost);
    res.status(201).json(savedPost);
  } catch (err) {
    console.error('Error saving post:', err);
    res.status(400).json({ message: err.message });
  }
};