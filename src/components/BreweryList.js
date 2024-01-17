import React, { useEffect, useState } from 'react';

function BreweryList() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/breweries')
      .then(response => response.json())
      .then(data => setBreweries(data))
  }, []);

  return (
    <div class="wrapper">
      <h2 align="center">Breweries</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {breweries.map(brewery => (
            <tr key={brewery.id}>
              <td>{brewery.name}</td>
              <td>{brewery.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BreweryList;