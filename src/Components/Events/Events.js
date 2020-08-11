import React from "react";
import { Helmet } from "react-helmet";
import "./Events.css";

import NavBar from "../Navigation/NavBar";
import Footer from "../Footer/Footer";

import caseComp from "../../images/Events/case-comp.jpg";
import infosysVsBusan from "../../images/Events/infosys-vs-busan.jpg";
import launchParty from "../../images/Events/launch-party.jpg";
import speakerSeries from "../../images/Events/speaker-series.jpg";

class Events extends React.Component {
  render() {
    return (
      <div className="main">
        <Helmet>
          <title>
            Events — Information Systems & Business Analytics Student Society
          </title>
          <meta
            name="description"
            content="Events hosted by IBSS UoA - includes Speaker Events, Case Competitions, Networking Events and more."
          />
        </Helmet>
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
            <img src={launchParty} alt="event-ad" />
            <div className="details-overlay">
              <p className="date details-font">
                date: 14 AUG || 6:30 PM – 8:30 PM location: OGGB Case Room
                1/260-005
              </p>
              <p className="details-text details-font">
                An introduction to our club! Meet our exec team and find out
                more about what we have to offer you. Bring yourself and your
                mates – or even better, meet some new ones! Get to know each and
                every one of us (we don’t bite). It will be a fun packed night
                with pizza and exciting games. We look forward to seeing you
                there.
              </p>
              <a
                href="https://www.facebook.com/events/346299809694932"
                className="link details-font"
              >
                View on FaceBook
              </a>
            </div>
          </div>
          <div className="single-event">
            <img src={caseComp} alt="event-ad" />
            <div className="details-overlay">
              <p className="date details-font">date: tbd | location: tbd</p>
              <p className="details-text details-font">
                The case competition is the perfect chance to gain practical
                experience in applying your skills to real-life problems for a
                real-world business; it will help you prepare for internship and
                job applications! Come along by yourself or form a group with
                your friends and prepare a solution to pitch to the judges of an
                external company that will be sponsoring us. This will improve
                your presentation skills as well as team work.
              </p>
              <p className="hide-link link details-font">View on FaceBook</p>
            </div>
          </div>
          <div className="single-event">
            <img src={infosysVsBusan} alt="event-ad" />
            <div className="details-overlay">
              <p className="date details-font">date: tbd | location: tbd</p>
              <p className="details-text details-font">
                What’s the difference? Find out from our lecturers and tutors
                about which major you should choose. Come listen to stories from
                the exec team that are majoring in INFOSYS and BUSAN as well. Be
                sure to come along. This will help you find your path in INFOSYS
                or BUSAN or even both!
              </p>
              <p className="hide-link link details-font">View on FaceBook</p>
            </div>
          </div>

          <div className="single-event">
            <img src={speakerSeries} alt="event-ad" />
            <div className="details-overlay">
              <p className="date details-font">date: tbd | location: tbd</p>
              <p className="details-text details-font">
                Want to make it in the INFOSYS/BUSAN industry? Come listen to
                the people who have been there, done that. We will be having
                speakers from the Big 4 and large MNCs. This will help you
                picture your future in this industry. Make sure to prepare some
                questions that could get you an exclusive answer from these
                speakers. This will be the perfect opportunity to have an
                eye-opening look into careers in this sector.{" "}
              </p>
              <p className="hide-link link details-font">View on FaceBook</p>
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
