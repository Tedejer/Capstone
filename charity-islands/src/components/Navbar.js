import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LoginPage">Login</Link>
          </li>
          <li>
            <Link to="/AboutPage">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
