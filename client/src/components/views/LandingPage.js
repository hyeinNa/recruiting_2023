import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./LandingPage.css";
import EwhaianInfo from "./EwhaianInfoPages/EwhaianInfo";
import TeamInfo from "./TeamInfoPages/TeamInfo";
import Event from "./EventPages/EventPages";
import Activities from "./Activities/Activities";
import QnA from "./QnAPages/QnA";
function LandingPage() {
  return (
    <div>
      <Header />
      <div className="between_wrapper">
        <div id="ewhaianInfo">
          <EwhaianInfo />
        </div>
        <div id="teamInfo">
          <TeamInfo />
        </div>
        <div id="event">
          <Event />
        </div>
        <div id="activities">
          <Activities />
        </div>
        <div id="qna">
          <QnA />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
