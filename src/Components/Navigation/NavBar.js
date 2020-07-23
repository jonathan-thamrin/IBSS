import React from "react";
import "./NavBar.css";
import logo from "../../images/IBSS Logo white.png";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="ibss-identifiers">
          <img id="logo-pic" src={logo} alt="logo" />
          <span id="logo-name">IBSS</span>
        </div>

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
      </div>
    );
  }
}

export default NavBar;
