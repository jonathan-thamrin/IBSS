import React from "react";
import "./About.css";
import Cecilia from "../../images/Executive/Cecilia.JPG";
import Angela from "../../images/Executive/Angela.JPG";
import Aimee from "../../images/Executive/Aimee.jpg";
import Esther from "../../images/Executive/Esther.jpeg";
import Iven from "../../images/Executive/Iven.jpg";
import KeXin from "../../images/Executive/KeXin.jpeg";
import YangYang from "../../images/Executive/YangYang.png";
import Yashika from "../../images/Executive/Yashika.jpg";
import Jonathan from "../../images/Executive/Jonathan.jpeg";
import PortraitPH from "../../images/Executive/portrait-ph.jpg";

import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

class About extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <NavBar />
          <div className="introduction">
            <p className="wel-to">About IBSS</p>
            <p className="isbass">
              Meet the IBSS Team. Explore What We Do and Who We Are.
            </p>
          </div>
        </div>

        <div className="sec-div-pres">
          <div className="members-pres-div">
            <div className="member-img-padding member-pres">
              <p className="sec-heading-pres sec-heading-font blue-font">
                President
              </p>
              <img src={Cecilia} alt="cecilia-pic" />
              <p className="member-name team-lead">Cecilia Wang</p>
            </div>

            <div className="member-img-padding member-pres">
              <p className="sec-heading-pres sec-heading-font blue-font">
                Vice-President
              </p>
              <img src={Angela} alt="angela-pic" />
              <p className="member-name">Angela Hung</p>
            </div>
          </div>
        </div>

        <div className="sec-div-exec light-blue-background">
          <div className="members-exec-div width-100">
            <p className="sec-heading-exec sec-heading-font light-blue-font">
              Marketing
            </p>
            <div className="members-exec">
              <div className="member-exec">
                <img src={Iven} alt="iven-pic" />
                <p className="member-name team-lead">Iven Li</p>
              </div>
              <div className="member-exec">
                <img src={KeXin} alt="kexin-pic" />
                <p className="member-name">KeXin Li</p>
              </div>
              <div className="member-exec">
                <img src={PortraitPH} alt="estella-pic" />
                <p className="member-name">Estella Wong</p>
              </div>
              <div className="member-exec">
                <img src={YangYang} alt="yang-pic" />
                <p className="member-name">Yang Yang</p>
              </div>
            </div>
          </div>
          <div className="members-exec-div width-100">
            <p className="sec-heading-exec sec-heading-font light-blue-font">
              Events
            </p>
            <div className="members-exec">
              <div className="member-exec">
                <img src={Esther} alt="esther-pic" />
                <p className="member-name team-lead">Esther Yang</p>
              </div>
              <div className="member-exec">
                <img src={PortraitPH} alt="jade-pic" />
                <p className="member-name">Jade Chan</p>
              </div>
              <div className="member-exec">
                <img src={PortraitPH} alt="pritika-pic" />
                <p className="member-name">Pritika Chand</p>
              </div>
              <div className="member-exec">
                <img src={PortraitPH} alt="kabilan-pic" />
                <p className="member-name">Kabilan Kathiravel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sec-div-exec">
          <div className="members-exec-div">
            <p className="sec-heading-exec sec-heading-font light-blue-font">
              Public Relations
            </p>
            <div className="members-exec">
              <div className="member-exec">
                <img src={Yashika} alt="yashika-pic" />
                <p className="member-name team-lead">Yashika Khetan</p>
              </div>
              <div className="member-exec">
                <img src={KeXin} alt="kexin-pic" />
                <p className="member-name">KeXin Li</p>
              </div>
              <div className="member-exec">
                <img src={PortraitPH} alt="weiwei-pic" />
                <p className="member-name">Wei-Wei Wu</p>
              </div>
            </div>
          </div>
          <div className="members-exec-div">
            <p className="sec-heading-exec sec-heading-font light-blue-font">
              Treasury
            </p>
            <div className="members-exec">
              <div className="member-exec">
                <img src={PortraitPH} alt="reeshan-pic" />
                <p className="member-name team-lead">Reeshan Kishore</p>
              </div>
              <div className="member-exec">
                <img src={YangYang} alt="yangyang-pic" />
                <p className="member-name">Yang Yang</p>
              </div>
            </div>
          </div>
          <div className="members-exec-div">
            <p className="sec-heading-exec sec-heading-font light-blue-font">
              Technical
            </p>
            <div className="members-exec">
              <div className="member-exec">
                <img src={Jonathan} alt="jonathan-pic" />
                <p className="member-name team-lead">Jonathan Thamrin</p>
              </div>
            </div>
          </div>
          <div className="members-exec-div">
            <p className="sec-heading-exec sec-heading-font light-blue-font">
              Creative
            </p>
            <div className="members-exec">
              <div className="member-exec">
                <img src={Aimee} alt="aimee-pic" />
                <p className="member-name team-lead">Aimee Lam</p>
              </div>
              <div className="member-exec">
                <img src={PortraitPH} alt="jade-pic" />
                <p className="member-name">Jade Chan</p>
              </div>
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

export default About;