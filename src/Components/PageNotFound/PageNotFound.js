import React from "react";
import { Helmet } from "react-helmet";
import "./PageNotFound.css";

import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>
            Page Not Found — Information Systems & Business Analytics Student
            Society
          </title>
          <meta
            name="description"
            content="The page you are looking for is not found."
          />
        </Helmet>
        <div className="header">
          <NavBar />
          <div className="introduction">
            <p className="wel-to">Error 404</p>
            <p className="isbass">The page you are looking for is not valid.</p>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default PageNotFound;
