import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [link, setLink] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // For demonstration, just log the name to the console
    console.log('Submitted link:', link);
    // Here you could also send the data to an API or backend
       const res = await axios.get(`http://localhost:8081/${link}`);
       console.log("res url : ",res);
       const redirectUrl = res.data;
       window.location.href = redirectUrl; // Clear the input after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="link">link:</label>
        <input
          type="text"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter your Link"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
