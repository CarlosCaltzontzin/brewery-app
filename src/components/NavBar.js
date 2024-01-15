import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div className="navbar">
      <NavLink exact to="/" >
        Home
      </NavLink>
      <NavLink exact to="/breweries" >
        Breweries
      </NavLink>
      <NavLink exact to="/add" >
        Add Brewery
      </NavLink>
    </div>
  )
}

export default NavBar;