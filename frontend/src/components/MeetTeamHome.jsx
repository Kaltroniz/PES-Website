import React from "react";
import { Link } from "react-router-dom";
import "../styles/componentsStyles/MeetTeamHome.css";

import rajeevSir from "../assets/patronAndMentor/rajeev_sir.jpeg";
import harpreetSir from "../assets/patronAndMentor/harpreet_sir.jpg";
import ppsSir from "../assets/patronAndMentor/pps_sir.jpeg";

const leadership = [
  {
    role: "Patron",
    name: "Prof. Rajeev Ahuja",
    designation: "Director, IIT Ropar",
    img: rajeevSir,
  },
  {
    role: "Faculty Mentor",
    name: "Prof. Harpreet Singh",
    designation: "Professor, IIT Ropar",
    img: harpreetSir,
  },
  {
    role: "Faculty Mentor",
    name: "Dr. Pushpendra P. Singh",
    designation: "Associate Professor, IIT Ropar",
    img: ppsSir,
  },
];

const MeetTeamHome = () => {
  const handleImageError = (e, name) => {
    e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(name) + "&background=d97706&color=fff";
  };

  return (
    <section className="team-home-section" id="meet-the-team">
      <div className="team-home-header">
        <span className="team-home-kicker">THE PEOPLE BEHIND PES</span>
        <h2 className="team-home-title">MEET THE TEAM</h2>
        <p className="team-home-lead">
          We are a collective of undergraduate students, scholars, and
          volunteers from IIT Ropar, bound by a shared sense of duty. We work
          under the kind patronage and steadfast mentorship of our faculty
          leaders.
        </p>
      </div>

      {/* Leadership Grid */}
      <div className="team-leadership-grid">
        {leadership.map((leader, index) => (
          <div key={index} className="team-leader-card">
            <span className="leader-role-badge">{leader.role}</span>
            <div className="leader-img-wrapper">
              <img
                src={leader.img}
                alt={leader.name}
                className="leader-img"
                onError={(e) => handleImageError(e, leader.name)}
              />
            </div>
            <h3 className="leader-name">{leader.name}</h3>
            <p className="leader-desig">{leader.designation}</p>
            <div className="leader-card-footer">
              <span className="leader-inst">Indian Institute of Technology Ropar</span>
            </div>
          </div>
        ))}
      </div>


      {/* CTA to Our Team Page */}
      <div className="team-cta-box">
        <p className="team-cta-text">
          Our on-ground operations, teaching drives, and outreach sessions are
          driven with passion by dozens of student coordinators and active
          volunteers.
        </p>
        <Link to="/ourteam" className="team-cta-btn">
          View Complete Team & Coordinators &rarr;
        </Link>
      </div>
    </section>
  );
};

export default MeetTeamHome;
