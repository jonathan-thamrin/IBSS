import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/IBSS Logo white.png";

class NavBar extends React.Component {
  state = { showNav: false };

  toggleNav = () => {
    this.setState({ showNav: !this.state.showNav });
    console.log(this.state.showNav);
  };

  render() {
    const navVis = this.state.showNav ? "nav-active" : "";

    return (
      <div>
        <div className="ibss-identifiers">
          <img id="logo-pic" src={logo} alt="logo" />
          <span id="logo-acronym">IBSS</span>
          <div onClick={this.toggleNav} className="nav-burger">
            <div className="nav-burger-1"></div>
            <div className="nav-burger-2"></div>
            <div className="nav-burger-3"></div>
          </div>
        </div>

        <nav>
          <ul className={`nav-links nav-font ${navVis}`}>
            <i onClick={this.toggleNav} className="arrow left"></i>
            <Link to="/" className="router-link first-element">
              <li className="first-element">
                <span>Home</span>
                <p className="subtitles">Main Page</p>
              </li>
            </Link>
            <li className="separator">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeicl2pA0qapQqbmYSInAy9hEIWHbuZkr96TgE1pGi83GNd-w/viewform"
              >
                Sign-Up
              </a>
              <p className="subtitles">Join IBSS</p>
            </li>
            <Link to="/events" className="router-link separator">
              <li>
                <span>Events</span>
                <p className="subtitles">Key Dates</p>
              </li>
            </Link>
            <Link to="/about" className="router-link separator">
              <li>
                <span>Sponsors</span>
                <p className="subtitles">2020 Funding</p>
              </li>
            </Link>
            <Link to="/about" className="router-link separator">
              <li>
                <span>About Us</span>
                <p className="subtitles">Meet the Team</p>
              </li>
            </Link>
            <Link to="/contact" className="router-link separator last-element">
              <li>
                <span>Contact Us</span>
                <p className="subtitles">Get in Touch</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
