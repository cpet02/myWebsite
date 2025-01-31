import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

function About() {
  const [aboutData, setAboutData] = useState('');

  useEffect(() => {
    const getAboutData = async () => {
      try {
        const data = await fetchData('about'); // Fetches from /api/about
        setAboutData(data.message);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getAboutData();
  }, []);

  return (
    <div>
      <h1>About Me</h1>
      <p>{aboutData}</p>
    </div>
  );
}

export default About;