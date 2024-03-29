import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import BreweryList from './BreweryList';
import BreweryForm from './BreweryForm';

function App() {
  const [breweries, setBreweries] = useState([]);

  // Fetch existing breweries to initialize the state
  useEffect(() => {
    fetch('http://localhost:3001/breweries')
      .then(response => response.json())
      .then(data => setBreweries(data))
      .catch(error => console.error('Error fetching breweries:', error));
  }, []);

  // Calculate the next available ID for a new brewery
  const getNextId = () => {
    const maxId = Math.max(...breweries.map(brewery => brewery.id), 0);
    return maxId + 1;
  };

  // Update the list of breweries in the state
  const handleAddBrewery = (newBrewery) => {
    setBreweries([...breweries, newBrewery]);
  };

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/breweries">
          <BreweryList breweries={breweries} />
        </Route>
        <Route path="/add">
          <BreweryForm onAddBrewery={handleAddBrewery} getNextId={getNextId}/>
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
