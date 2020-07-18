import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <ul>
          <li>Home</li>
          <li>Sign-Up</li>
          <li>Events</li>
          <li>Sponsors</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
