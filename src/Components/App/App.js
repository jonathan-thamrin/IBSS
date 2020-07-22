import React from "react";
import "./App.css";
import logo from "../../images/IBSS Logo white.png";
import collage from "../../images/Why Join Us/collage.png";

import NavBar from "../Navigation/NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="ibss-identifiers">
            <img id="logo-pic" src={logo} alt="logo" />
            <span id="logo-name">IBSS</span>
          </div>
          <NavBar />
          <div className="introduction">
            <p className="wel-to">Welcome to</p>
            <p className="isbass">
              INFORMATION SYSTEMS & BUSINESS ANALYTICS STUDENT SOCIETY
            </p>
          </div>
        </div>
        <div className="wju">
          <p className="sec-headers">Why Join Us?</p>
          <div className="wju-content">
            <img src={collage} alt="collage" />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mollis justo consequat turpis ultrices dapibus. Fusce porttitor
              posuere vestibulum. Sed eget porta nibh, non pellentesque lectus.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
