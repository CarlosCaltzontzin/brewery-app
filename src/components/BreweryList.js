import React, { useEffect, useState } from 'react';

function BreweryList({ breweries }) {
  return (
    <div class="wrapper">
      <h2 align="center">Breweries</h2>
      {/* Table to display the list of breweries */}
      <table>
        <thead>
          <tr>
            {/* Table headers: Name and Address */}
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {/*Create a row for each brewery */}
          {breweries.map(brewery => (
            <tr key={brewery.id}>
              {/* Display the name and address of each brewery */}
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