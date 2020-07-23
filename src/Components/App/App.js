import React from "react";
import "./App.css";
import collage from "../../images/Why Join Us/collage.png";
import placeholder from "../../images/placeholder.png";

import NavBar from "../Navigation/NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <NavBar />
          <div className="introduction">
            <p className="wel-to">Welcome to</p>
            <p className="isbass">
              INFORMATION SYSTEMS & BUSINESS ANALYTICS STUDENT SOCIETY
            </p>
          </div>
        </div>

        <div className="sec-div why-join-us">
          <p className="sec-heading">Why Join Us?</p>
          <p className="text-content-font sec-subtitles">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
            justo consequat turpis ultrices dapibus. Fusce porttitor posuere
            vestibulum.
          </p>
          <div className="sec-content">
            <img src={collage} alt="collage" />
            <span className="text-content-font text-content-img">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mollis justo consequat turpis ultrices dapibus. Fusce porttitor
              posuere vestibulum. Sed eget porta nibh, non pellentesque lectus.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </span>
          </div>
        </div>

        <div className="light-blue-background">
          <div className="sec-div">
            <p className="sec-heading">Recent Photos</p>
            <p className="text-content-font sec-subtitles">
              Taken from Meet and Greets, Case Competitions, Events and more!
            </p>
            <div className="sec-content recent-photos">
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
            </div>
          </div>
        </div>

        <div className="sec-div">
          <p className="sec-heading">Join IBSS</p>
          <p className="text-content-font sec-subtitles">
            If IBSS sounds like the perfect club for you, sign up today using
            the form below:
          </p>
          <div className="sec-content">
            <a href="http://google.com" className="text-content-href">
              <span className="text-content-link">Sign-up Form →</span>
            </a>
          </div>
        </div>

        <div className="light-blue-background">
          <div className="sec-div">
            <p className="sec-heading">Our 2020 Sponsors</p>
            <p className="text-content-font sec-subtitles">
              IBSS was made possible by our generous sponsors.
            </p>
            <div className="sec-content recent-photos">
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
              <img src={placeholder} alt="placeholder" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
