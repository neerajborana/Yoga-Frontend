import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addm.css';

function Addm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    batch: '5-6',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const age = parseInt(formData.age, 10);
    return age >= 18 && age <= 65;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Age must be between 18 and 65.');
      return;
    }
    try {
      // const response = await fetch('https://yoga-backend-1uls.onrender.com/api/formdata', {
        const response = await fetch('https://yoga-backend-1uls.onrender.com/api/formdata',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        navigate('/payment');
        alert('Form submitted successfully!');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAge" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputAge"
            name="age"
            min="18"
            max="65"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 select-wrapper">
          <label htmlFor="batchSelect" className="form-label">
            Select Batch
          </label>
          <select
            id="batchSelect"
            className="form-control"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
          >
            <option value="5-6">5-6</option>
            <option value="6-7">6-7</option>
            <option value="7-8">7-8</option>
            <option value="8-9">8-9</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary"onClick={handleSubmit} >
          Enroll
        </button>
      </form>
    </div>
  );
}

export default Addm;
