import * as React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active-link" : "link"}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? "active-link" : "link"}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;