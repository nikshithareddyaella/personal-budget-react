import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav role="navigation"> 
      <div className="menu"> 
        <ul className="ultop">
          <li>
            <Link to="/" aria-label="Go to Homepage">Homepage</Link>
          </li>
          <li>
            <Link to="/about" aria-label="Learn more About us">About</Link>
          </li>
          <li>
            <Link to="/login" aria-label="Login to your account">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
