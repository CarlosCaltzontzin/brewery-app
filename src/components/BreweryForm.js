// BreweryForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BreweryForm = ({ onAddBrewery }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/breweries', { name });
      onAddBrewery(response.data);
      setName('');
    } catch (error) {
      console.error('Error adding brewery:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Brewery Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Add Brewery</button>
    </form>
  );
};

export default BreweryForm;