import React, { useEffect, useState } from 'react';

function BreweryList() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/breweries')
      .then(response => response.json())
      .then(data => setBreweries(data))
  }, []);

  return (
    <div>
      <h2 align="center">Breweries</h2>
      <ul>
        {breweries.map(brewery => (
          <li key={brewery.id}>
            <strong>Name:</strong> {brewery.name}
            <br />
            <strong>Address:</strong> {brewery.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BreweryList;