import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li className="separator">
            <a href="#">Sign-Up</a>
          </li>
          <li className="separator">
            <a href="#">Events</a>
          </li>
          <li className="separator">
            <a href="#">Sponsors</a>
          </li>
          <li className="separator">
            <a href="#">About Us</a>
          </li>
          <li className="separator">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
