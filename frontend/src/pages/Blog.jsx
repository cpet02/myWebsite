import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const data = await fetchData('blog'); // Fetches from /api/blog
        setPosts(data.posts);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getBlogPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;