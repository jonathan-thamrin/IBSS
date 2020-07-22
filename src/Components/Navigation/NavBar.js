import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
            <p className="subtitles">Main Page</p>
          </li>
          <li className="separator">
            <a href="#">Sign-Up</a>
            <p className="subtitles">Join IBSS</p>
          </li>
          <li className="separator">
            <a href="#">Events</a>
            <p className="subtitles">Key Dates</p>
          </li>
          <li className="separator">
            <a href="#">Sponsors</a>
            <p className="subtitles">2020 Funding</p>
          </li>
          <li className="separator">
            <a href="#">About Us</a>
            <p className="subtitles">Meet the Team</p>
          </li>
          <li className="separator">
            <a href="#">Contact Us</a>
            <p className="subtitles">Get in Touch</p>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
