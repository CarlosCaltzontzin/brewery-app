import React, { useState, useEffect } from 'react';

function BreweryForm({ onAddBrewery, getNextId }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    // Fetch existing breweries to find the max ID
    fetch('http://localhost:3001/breweries')
      .then(response => response.json())
      .then(data => setBreweries(data))
      .catch(error => console.error('Error fetching breweries:', error));
  }, []);

  const handleAddBrewery = () => {
    const nextId = getNextId();

    // Fetch request to add brewery
    fetch('http://localhost:3001/breweries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: nextId,
        name: name,
        address: address,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add brewery');
        }
        return response.json();
      })
      .then(data => {
        onAddBrewery(data); // Invoke the callback with the new brewery data
        setName('');
        setAddress('');
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