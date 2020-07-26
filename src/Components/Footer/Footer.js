import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <ul className="footer">
        <li className="social-link">
          <a target="_blank" href="https://www.facebook.com/ibss.uoa/">
            FaceBook
          </a>
        </li>
        <li className="divider social-link">
          <a target="_blank" href="https://www.instagram.com/uoa.ibss">
            Instagram
          </a>
        </li>
        <li className="divider social-link">
          <a target="_blank" href="https://www.linkedin.com/company/uoaibss/">
            LinkedIn
          </a>
        </li>
      </ul>
    );
  }
}

export default Footer;
