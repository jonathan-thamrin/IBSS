import React from "react";
import { Helmet } from "react-helmet";
import "./Sponsors.css";

import myob from "../../images/Major Sponsors/myob.jpg";

import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

class Sponsors extends React.Component {
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>
            Sponsors — Information Systems & Business Analytics Student Society
          </title>
          <meta
            name="description"
            content="Our sponsors that made the Information Systems & Business Analytics Student Society here at University of Auckland possible."
          />
        </Helmet>
        <div className="header">
          <NavBar />
          <div className="introduction">
            <p className="wel-to">Our 2020 Sponsors</p>
            <p className="isbass">
              Notable mentions for our Sponsors for 2020.
            </p>
          </div>
        </div>

        <div className="sec-div">
          <p className="sec-heading">Coming Soon</p>
          <p className="text-content-font sec-subtitles"></p>
          <div className="sec-content text-content-font">
            <a className="email-href">Watch this space.</a>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Sponsors;
