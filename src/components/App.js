import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import BreweryList from './BreweryList';
import BreweryForm from './BreweryForm';

function App() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    // Fetch existing breweries to initialize the state
    fetch('http://localhost:3001/breweries')
      .then(response => response.json())
      .then(data => setBreweries(data))
      .catch(error => console.error('Error fetching breweries:', error));
  }, []);

  const getNextId = () => {
    const maxId = Math.max(...breweries.map(brewery => brewery.id), 0);
    return maxId + 1;
  };

  const handleAddBrewery = (newBrewery) => {
    // Update the list of breweries in the state
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
          <BreweryList />
        </Route>
        <Route path="/add">
          <BreweryForm onAddBrewery={handleAddBrewery} getNextId={getNextId}/>
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
