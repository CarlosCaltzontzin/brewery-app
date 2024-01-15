import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink exact to="/breweries" className="nav-link">
        Breweries
      </NavLink>
      <NavLink exact to="/add" className="nav-link">
        Add Brewery
      </NavLink>
    </div>
  );
}

export default NavBar;