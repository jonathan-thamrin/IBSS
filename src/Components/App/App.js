import React from "react";
import "./App.css";
import logo from "../../images/IBSS Logo white.png";

import NavBar from "../Navigation/NavBar";

class App extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="ibss-identifiers">
          <img id="logo-pic" src={logo} alt="logo" />
          <span id="logo-name">IBSS</span>
        </div>
        <NavBar />
        <div className="introduction">
          <p className="welTo">Welcome to</p>
          <p className="ISBASS">
            INFORMATION SYSTEMS & BUSINESS ANALYTICS STUDENT SOCIETY
          </p>
        </div>
      </div>
    );
  }
}

export default App;
