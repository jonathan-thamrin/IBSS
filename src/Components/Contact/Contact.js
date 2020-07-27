import React from "react";
import { Helmet } from "react-helmet";
import "./Contact.css";

import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

class Contact extends React.Component {
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>
            Contact Us — Information Systems & Business Analytics Student
            Society
          </title>
          <meta
            name="description"
            content="Contact the Information Systems & Business Analytics Student
            Society - University of Auckland."
          />
        </Helmet>
        <div className="header">
          <NavBar />
          <div className="introduction">
            <p className="wel-to">Contact Us</p>
            <p className="isbass">
              Get in touch with us through our Social Links or flick us an
              E-mail.
            </p>
          </div>
        </div>

        <div className="sec-div">
          <p className="sec-heading">E-Mail</p>
          <p className="text-content-font sec-subtitles">
            Send us an e-mail to the address below:
          </p>
          <div className="sec-content text-content-font">
            <a className="email-href" href="mailto: uoa.ibss@gmail.com">
              Send Email→
            </a>
          </div>
        </div>

        <div className="light-blue-background">
          <div className="sec-div">
            <p className="sec-heading">Social Media</p>
            <p className="text-content-font sec-subtitles">
              Connect with us through our Social Media profiles:
            </p>
            <ul className="socials-list text-content-font">
              <li>FaceBook: @ibss.uoa</li>
              <li>Instagram: @uoa.ibss</li>
              <li>LinkedIn: in/uoaibss</li>
            </ul>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
