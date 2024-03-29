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
      // Invoke the callback with the new brewery data
      onAddBrewery(data);
      // Clear the name and address input fields
      setName('');
      setAddress('');
      // Set the success message
      setMessage('Added brewery'); 
      // Clear the success message after a few seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    })
    .catch(error => {
      // Log errors if any during the fetch operation
      console.error('Error adding brewery:', error);
      // Set an error message
      setMessage('Failed to add brewery');
      // Clear the error message after a few seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    });
  };
  
  return (
    <div>
      <h2 align="center">Add Brewery</h2>
      {/* Form for adding a new brewery, with event handling to call 'handleAddBrewery' on submit */}
      <form className="brewery-form" onSubmit={(e) => { e.preventDefault(); handleAddBrewery(); }}>
        {/* Input field for the brewery name */}
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {/* Input field for the brewery address */}
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        {/* Submit button for adding a new brewery */}
        <button type="submit">Add Brewery</button>
      </form>
      {/* Display the message (success or error) */}
      {message && <div>{message}</div>}
    </div>
  );
}

export default BreweryForm;
