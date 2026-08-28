import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/componentsStyles/JoinJourneyCTA.css";

function JoinJourneyCTA() {
  return (
    <section className="join-journey-section">
      <div className="join-journey-container">
        <div className="join-journey-card">
          <div className="join-journey-glow"></div>
          <span className="join-journey-kicker">JOIN OUR JOURNEY</span>
          <h2 className="join-journey-title">Be a part of this journey</h2>
          <p className="join-journey-subtitle">
            The smallest gesture of kindness can rewrite a child's story.
          </p>
          <div className="join-journey-actions">
            <Link to="/donate" className="btn-support-cause">
              <span>Support Our Cause (UPI: 9463737258@ybl)</span>
              <FaHeart className="btn-icon-heart" />
            </Link>

            <Link to="/joinus" className="btn-join-volunteer">
              <span>Join as Volunteer</span>
              <FaExternalLinkAlt className="btn-icon-ext" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinJourneyCTA;
