import React, { useState, useEffect } from 'react';

function BreweryForm({ onAddBrewery, getNextId }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  // Function to add a new brewery
  const handleAddBrewery = () => {

    // Get the next available ID using the 'getNextId' function
    const nextId = getNextId();
    
    // Fetch request to add brewery
    fetch('http://localhost:3001/breweries', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      // Convert the data to JSON format
      body: JSON.stringify({
        id: nextId,
        name: name,
        address: address,
      }),
    })
    .then(response => {
      // Check if the response is OK; if not, throw an error
      if (!response.ok) {
        throw new Error('Failed to add brewery');
      }
      
      return response.json();
    })
    .then(data => {
      onAddBrewery(data); // Invoke the callback with the new brewery data
      setName('');        // Clear the name input field
      setAddress('');     // Clear the address input field
      setMessage('Added brewery'); // Set the success message
        // Clear the message after a few seconds
        setTimeout(() => {
          setMessage('');
        }, 3000);
      })
      .catch(error => {
        console.error('Error adding brewery:', error);
        setMessage('Failed to add brewery'); // Set the error message
        // Clear the message after a few seconds
        setTimeout(() => {
          setMessage('');
        }, 3000);
      });
  };

  return (
    <div>
      <h2 align="center">Add Brewery</h2>
      <form className="brewery-form" onSubmit={(e) => { e.preventDefault(); handleAddBrewery(); }}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">
          Add Brewery
        </button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default BreweryForm;
