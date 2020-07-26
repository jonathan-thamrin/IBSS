import React from "react";
import "./App.css";
import collage from "../../images/Why Join Us/collage.png";
import placeholder from "../../images/placeholder.png";

import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="main">
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
            Are you interested Business? Technology? Or both?
          </p>
          <div className="sec-content sec-content-mobile">
            <img src={collage} alt="collage" id="why-join-us-img" />
            <span className="text-content-font" id="why-join-us-text">
              Information Systems and Business Analytics is one of the fastest
              growing industries in the world, and the Information Systems and
              Business Analytics Society can help you be a part of it. Come join
              us and expand your network and skills along the way.
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
            </div>
          </div>
        </div>

        <div className="dark-blue-background">
          <div className="sec-div">
            <p className="sec-heading">Join IBSS</p>
            <p className="text-content-font sec-subtitles">
              If IBSS sounds like the perfect club for you, sign up today using
              the form below:
            </p>
            <div className="sec-content">
              <a
                target="_blank"
                className="text-content-href"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeicl2pA0qapQqbmYSInAy9hEIWHbuZkr96TgE1pGi83GNd-w/viewform"
              >
                <span className="text-content-link">Sign-up Form →</span>
              </a>
            </div>
          </div>
        </div>

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
          </div>
        </div>

        <div className="light-blue-background">
          <div className="sec-div">
            <p className="sec-heading">Join our Mailing List</p>
            <p className="text-content-font sec-subtitles">
              Want to be the first to know about our latest events, case
              competitions and more?
            </p>
            <div className="sec-content">
              <a
                target="_blank"
                className="text-content-href"
                href="https://docs.google.com/forms/d/e/1FAIpQLScivTQdUD6rvBsglO1USAyABmDrVrdR6qz-xNDaCeWlcalIMg/viewform"
              >
                <span className="text-content-link">Mailing List →</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
