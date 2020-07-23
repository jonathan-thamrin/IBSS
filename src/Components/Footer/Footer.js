import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <ul className="footer">
        <li>
          <a href="https://www.facebook.com/ibss.uoa/">FaceBook</a>
        </li>
        <li className="divider">
          <a href="https://www.instagram.com/uoa.ibss">Instagram</a>
        </li>
        <li className="divider">
          <a href="#">LinkedIn</a>
        </li>
      </ul>
    );
  }
}

export default Footer;
