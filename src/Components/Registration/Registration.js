import React from "react";
import { Helmet } from "react-helmet";
import "./Registration.css";

import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

class Registration extends React.Component {
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>
            Registration — Information Systems & Business Analytics Student
            Society
          </title>
          <meta
            name="description"
            content="Register and join the Information Systems & Business Analytics Student
            Society - University of Auckland."
          />
        </Helmet>
        <div className="header">
          <NavBar />
          <div className="introduction">
            <p className="wel-to">Registration</p>
            <p className="isbass">
              Join the Information Systems & Business Analytics Student Society.
            </p>
          </div>
        </div>

        <div className="sec-div">
          <p className="sec-heading">Join Us</p>
          <p className="text-content-font sec-subtitles">
            Sign-up today using the form below:
            <br />
            <p>Membership Fee of $5 applies.</p>
          </p>
          <div className="text-content-font">
            <a
              className="link-href"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeicl2pA0qapQqbmYSInAy9hEIWHbuZkr96TgE1pGi83GNd-w/viewform"
            >
              Sign-up Form→
            </a>
          </div>
        </div>

        <div className="light-blue-background">
          <div className="sec-div">
            <p className="sec-heading">Payment Details</p>
            <p className="text-content-font sec-subtitles">Account details:</p>
            <p className="text-content-font sec-subtitles bank-info">
              UoA IBSS
              <br />
              06-0323-0683766-00
              <br />
              <br />
              Please include your UPI as reference or particulars.
            </p>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Registration;
