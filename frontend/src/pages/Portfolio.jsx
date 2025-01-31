import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getPortfolioItems = async () => {
      try {
        const data = await fetchData('portfolio'); // Fetches from /api/portfolio
        setProjects(data.projects);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getPortfolioItems();
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;