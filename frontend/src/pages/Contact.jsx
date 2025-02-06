import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  // Function to determine if the current host is a private IP
  const isPrivateIP = (hostname) => {
    // Check for 192.168.x.x
    if (/^192\.168\./.test(hostname)) return true;
    // Check for 10.x.x.x
    if (/^10\./.test(hostname)) return true;
    // Check for 172.16.x.x to 172.31.x.x
    if (/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname)) return true;
    return false;
  };

  // Determine the correct API URL based on the environment
  const hostname = window.location.hostname;
  const isLocalNetwork = isPrivateIP(hostname);
  const isCampusNetwork = hostname.includes('172.17.69.71');
  const apiUrl = isLocalNetwork
    ? `http://${hostname}:5000/api/contact` // Use the current private IP
    : isCampusNetwork
    ? 'http://172.17.69.71:5000/api/contact'
    : 'http://localhost:5000/api/contact'; // Fallback for local development

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Contact;