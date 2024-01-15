// BreweryForm.js
import React, { useState } from 'react';

function BreweryForm({ onAddBrewery }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleAddBrewery = () => {
    // Fetch request to add brewery
    fetch('http://localhost:3001/breweries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        address: address,
      }),
    })
      .then(response => response.json())
      .then(data => {
        onAddBrewery(data); // Invoke the callback with the new brewery data
        setName('');
        setAddress('');
      })
      .catch(error => console.error('Error adding brewery:', error));
  };

  return (
    <div>
      <h2 align="center">Add Brewery</h2>
      <form className="brewery-form">
        <label>
          Brewery Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Brewery Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddBrewery}>
          Add Brewery
        </button>
      </form>
    </div>
  );
}

export default BreweryForm;