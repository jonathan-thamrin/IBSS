import React from "react";
import "./About.css";
import { isMobile } from "react-device-detect";

import Aimee from "../../images/Executive/Aimee.jpg";
import Angela from "../../images/Executive/Angela.JPG";
import Cecilia from "../../images/Executive/Cecilia.JPG";
import Esther from "../../images/Executive/Esther.jpeg";
import Iven from "../../images/Executive/Iven.jpg";
import Jade from "../../images/Executive/Jade.jpg";
import Jonathan from "../../images/Executive/Jonathan.jpeg";
import KeXin from "../../images/Executive/KeXin.jpeg";
import Pritika from "../../images/Executive/Pritika.JPG";
import Reeshan from "../../images/Executive/Reeshan.jpg";
import YangYang from "../../images/Executive/YangYang.png";
import Yashika from "../../images/Executive/Yashika.jpg";

import PortraitPH from "../../images/Executive/portrait-ph.jpg";

import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

class About extends React.Component {
  render() {
    const lightBlueMob = isMobile ? "light-blue-background" : "";
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

        <div className="light-blue-background">
          <div className="sec-div-about">
            <p className="sec-heading">What We Do</p>
            <p className="text-content-font sec-subtitles">
              We aim to provide students from all faculties with the
              opportunities to guide career paths, provide a space to meet new
              friends, host workshops and speaker events with industry
              professionals. Through interactive events and networking functions
              we hope to give students the confidence to go out into the
              industry.
            </p>
          </div>
        </div>

        <div className="sec-div-about">
          <p className="sec-heading">Who We Are</p>
          <p className="text-content-font sec-subtitles">
            We are The University of Auckland's Information Systems and Business
            Analytics Student Society starting in Semester 2!
          </p>
        </div>

        <div className="sec-div-pres">
          <div className="members-pres-div">
            <div className="member-pres">
              <p className="sec-heading-pres sec-heading-font blue-font">
                President
              </p>
              <img src={Cecilia} alt="cecilia-pic" />
              <p className="member-name team-lead">Cecilia Wang</p>
            </div>

            <div className="member-pres">
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
                <p className="member-name team-lead">Iven Li (Lead)</p>
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
            <div className="members-exec last-member">
              <div className="member-exec">
                <img src={Esther} alt="esther-pic" />
                <p className="member-name team-lead">Esther Yang (Lead)</p>
              </div>
              <div className="member-exec">
                <img src={Pritika} alt="pritika-pic" />
                <p className="member-name">Pritika Chand</p>
              </div>
              <div className="member-exec">
                <img src={Jade} alt="jade-pic" />
                <p className="member-name">Jade Chan</p>
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
                <p className="member-name team-lead">Yashika Khetan (Lead)</p>
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
          <div className="members-exec-div last-member">
            <p className="sec-heading-exec sec-heading-font light-blue-font">
              Treasury
            </p>
            <div className="members-exec">
              <div className="member-exec">
                <img src={Reeshan} alt="reeshan-pic" />
                <p className="member-name team-lead">Reeshan Kishore (Lead)</p>
              </div>
              <div className="member-exec">
                <img src={YangYang} alt="yangyang-pic" />
                <p className="member-name">Yang Yang</p>
              </div>
            </div>
          </div>
          <div className={`members-exec-div ${lightBlueMob}`}>
            <p className="sec-heading-exec sec-heading-font light-blue-font">
              Creative
            </p>
            <div className="members-exec">
              <div className="member-exec">
                <img src={Aimee} alt="aimee-pic" />
                <p className="member-name team-lead">Aimee Lam (Lead)</p>
              </div>
              <div className="member-exec">
                <img src={Jade} alt="jade-pic" />
                <p className="member-name">Jade Chan</p>
              </div>
            </div>
          </div>
          <div className={`members-exec-div ${lightBlueMob}`}>
            <p className="sec-heading-exec sec-heading-font light-blue-font">
              Technical
            </p>
            <div className="members-exec last-member">
              <div className="member-exec">
                <img src={Jonathan} alt="jonathan-pic" />
                <p className="member-name team-lead">Jonathan Thamrin (Lead)</p>
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
