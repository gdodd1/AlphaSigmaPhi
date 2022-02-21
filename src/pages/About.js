import React from "react";
import Better from "../assets/toBETTERtheMAN1.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Better})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          The Kappa Pi provisional chapter of Alpha Sigma Phi was founded in the 
          Fall 2021 semester. The founding father rush class had 24 brothers.
        </p>
      </div>
    </div>
  );
}

export default About;