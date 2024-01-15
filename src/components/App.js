// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import BreweryList from './BreweryList';
import BreweryForm from './BreweryForm';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/breweries" component={BreweryList} />
        <Route path="/add" render={() => <BreweryForm />} />
      </Switch>
    </div>
  </Router>
);

export default App;
