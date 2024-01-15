// BreweryList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BreweryList = () => {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/breweries')
      .then(response => setBreweries(response.data));
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
};

export default BreweryList;