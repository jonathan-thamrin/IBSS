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
          <h1 id="logo-name">IBSS</h1>
        </div>
        <NavBar />
      </div>
    );
  }
}

export default App;
