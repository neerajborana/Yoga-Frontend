// Payment.js

import React, { useEffect, useState } from 'react';
import './Payment.css'; // Import the CSS file

const Payment = () => {
  const [formData, setFormData] = useState([]);
  function handleClick(){
    alert("Payment done successfully")
  }

  useEffect(() => {
    // Fetch data from your API endpoint 
    fetch('https://yoga-backend-1uls.onrender.com/displaydata')
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="entry-heading">Payment Page</h1>
      {formData.map((entry) => (
        <div key={entry._id} className="entry-box">
          <p className="entry-field"><strong>Email:</strong> {entry.email}</p>
          <p className="entry-field"><strong>Password:</strong> {entry.password}</p>
          <p className="entry-field"><strong>Remember Me:</strong> {entry.rememberMe ? 'Yes' : 'No'}</p>
          <p className="entry-field"><strong>Batch:</strong> {entry.batch}</p>
          <button id='btn' onClick={handleClick}>Pay Rs.500</button>
        </div>
      ))}
    </div>
  );
};

export default Payment;
