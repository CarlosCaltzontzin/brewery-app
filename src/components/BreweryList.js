// BreweryList.js
import React, { useEffect, useState } from 'react';

function BreweryList() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/breweries')
      .then(response => response.json())
      .then(data => setBreweries(data))
      .catch(error => console.error('Error fetching breweries:', error));
  }, []);

  return (
    <div align="center">
      <h2>Breweries</h2>
      <ul>
        {breweries.map(brewery => (
          <li key={brewery.id}>{brewery.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BreweryList;