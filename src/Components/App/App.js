import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";

import collage from "../../images/Why Join Us/collage.png";

import rp_img_1 from "../../images/Recent Photos/img_1.jpg";
import rp_img_2 from "../../images/Recent Photos/img_2.jpg";
import rp_img_3 from "../../images/Recent Photos/img_3.jpg";
import rp_img_4 from "../../images/Recent Photos/img_4.jpg";
import rp_img_5 from "../../images/Recent Photos/img_5.jpg";
import rp_img_6 from "../../images/Recent Photos/img_6.jpg";

import myob from "../../images/Sponsors/myob.JPG";

import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>IBSS | University of Auckland</title>
          <meta
            name="description"
            content="The Official Website for Information Systems and Business Analytics Student Society at University of Auckland."
          />
        </Helmet>
        <div className="header">
          <NavBar />
          <div className="introduction">
            <p className="wel-to">Welcome to</p>
            <p className="isbass">
              INFORMATION SYSTEMS & BUSINESS ANALYTICS STUDENT SOCIETY
            </p>
          </div>
        </div>

        {/* <div className="light-blue-background">
          <div className="sec-div event-div">
            <div className="sec-content">
              <img
                id="careershowcaseimg"
                src={careershowcaseimg}
                alt="banner"
              />
              <p className="text-content-font sec-subtitles">
                Curious about Information Systems and Business Analytics?
                Wondering what careers are out there? Want to know the
                difference between the two?
              </p>
              <p className="text-content-font sec-subtitles">
                Join us at our 𝗜𝗡𝗙𝗢𝗦𝗬𝗦 & 𝗕𝗨𝗦𝗔𝗡 𝗦𝗛𝗢𝗪𝗖𝗔𝗦𝗘 on 𝗙𝗿𝗶𝗱𝗮𝘆 𝟮𝟭 𝗔𝘂𝗴𝘂𝘀𝘁
                𝟲:𝟬𝟬-𝟴:𝟬𝟬𝗽𝗺 over 𝗭𝗼𝗼𝗺.
              </p>
              <p className="text-content-font sec-subtitles">
                Featuring speakers who have worked at: <b>PwC</b>, <b>KPMG</b>,{" "}
                <b>EY</b>, <b>ANZ</b>, <b>Beca</b> and <b>Russell McVeagh</b>.
              </p>
              <p className="text-content-font sec-subtitles">
                You don’t want to miss this! Sign up
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://rb.gy/rmejjg"
                >
                  <span> here </span>
                </a>
                to receive the zoom link.
              </p>
            </div>
          </div>
        </div> */}

        <div className="sec-div why-join-us">
          <p className="sec-heading">Why Join Us?</p>
          <p className="text-content-font sec-subtitles">
            Are you interested in Business? Technology? Or both?
          </p>
          <div className="sec-content sec-content-mobile">
            <img src={collage} alt="collage" id="why-join-us-img" />
            <span
              className="text-content-font light-font"
              id="why-join-us-text"
            >
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
              <img src={rp_img_1} alt="placeholder" />
              <img src={rp_img_2} alt="placeholder" />
              <img src={rp_img_3} alt="placeholder" />
              <img src={rp_img_4} alt="placeholder" />
              <img src={rp_img_5} alt="placeholder" />
              <img src={rp_img_6} alt="placeholder" />
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
                rel="noopener noreferrer"
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
            <img src={myob} />
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
                rel="noopener noreferrer"
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
