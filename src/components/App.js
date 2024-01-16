import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import BreweryList from './BreweryList';
import BreweryForm from './BreweryForm';

function App() {
  const [breweries, setBreweries] = useState([]);

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
          <BreweryForm onAddBrewery={handleAddBrewery}/>
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
