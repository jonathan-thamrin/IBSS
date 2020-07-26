import React from "react";
import "./Events.css";

import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

import caseComp from "../../images/Events/case-comp.png";
import infosysVsBusan from "../../images/Events/infosys-vs-busan.png";
import launchParty from "../../images/Events/launch-party.png";
import speakerSeries from "../../images/Events/speaker-series.png";

class Events extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <NavBar />
          <div className="introduction">
            <p className="wel-to">Events</p>
            <p className="isbass">
              Speaker Events, Case Competitions and More!
            </p>
          </div>
        </div>

        <div className="events-div">
          <div className="single-event">
            <img src={caseComp} alt="event-ad" />
            <div className="details-overlay">
              <span className="details-text">
                The case competition is the perfect chance to gain practical
                experience in applying your skills to real-life problems for a
                real-world business; it will help you prepare for internship and
                job applications! Come along by yourself or form a group with
                your friends and prepare a solution to pitch to the judges of an
                external company that will be sponsoring us. This will improve
                your presentation skills as well as team work.
              </span>
            </div>
          </div>
          <div className="single-event">
            <img src={infosysVsBusan} alt="event-ad" />
            <div className="details-overlay">
              <span className="details-text">
                What’s the difference? Find out from our lecturers and tutors
                about which major you should choose. Come listen to stories from
                the exec team that are majoring in INFOSYS and BUSAN as well. Be
                sure to come along. This will help you find your path in INFOSYS
                or BUSAN or even both!
              </span>
            </div>
          </div>
          <div className="single-event">
            <img src={launchParty} alt="event-ad" />
            <div className="details-overlay">
              <span className="details-text">
                An introduction to our club! Meet our exec team and find out
                more about what we have to offer you. Bring yourself and your
                mates – or even better, meet some new ones! Get to know each and
                every one of us (we don’t bite). It will be a fun packed night
                with pizza and exciting games. We look forward to seeing you
                there.
              </span>
            </div>
          </div>
          <div className="single-event">
            <img src={speakerSeries} alt="event-ad" />
            <div className="details-overlay">
              <span className="details-text">
                Want to make it in the INFOSYS/BUSAN industry? Come listen to
                the people who have been there, done that. We will be having
                speakers from the Big 4 and large MNCs. This will help you
                picture your future in this industry. Make sure to prepare some
                questions that could get you an exclusive answer from these
                speakers. This will be the perfect opportunity to have an
                eye-opening look into careers in this sector.{" "}
              </span>
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

export default Events;
