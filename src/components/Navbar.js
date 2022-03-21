import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light sticky-top text-center">
      <div className="container">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h1 className="display-4 text-success">Rubik's Cube</h1>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
