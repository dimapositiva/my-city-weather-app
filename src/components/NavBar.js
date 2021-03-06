import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () =>
  <nav>
    <ul id="nav">
      <li>
      <NavLink to="/" exact>
        Home
      </NavLink>
      </li>
      <li>
      <NavLink to="/about" exact>
        About
      </NavLink>
      </li>
    </ul>
  </nav>

export default NavBar;
