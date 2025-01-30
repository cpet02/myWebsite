import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/data') // This will be proxied to http://localhost:5000/api/data
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend-Backend Connection Test</h1>
        <p>Message from the backend: <strong>{message}</strong></p>
      </header>
    </div>
  );
}

export default App;