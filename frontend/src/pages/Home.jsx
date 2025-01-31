import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('data'); // Fetches from /api/data
        setMessage(data.message);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>Message from backend: <strong>{message}</strong></p>
    </div>
  );
}

export default Home;