// App.js
import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import BreweryList from './BreweryList';
import BreweryForm from './BreweryForm';

function App() {
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
          <BreweryForm />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
