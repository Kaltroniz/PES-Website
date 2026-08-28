import React from "react";
import "../styles/componentsStyles/OurImpact.css";
import CountUp from "./CountUp";

const impactMetrics = [
  {
    target: 800,
    suffix: "+",
    label: "Total Students Impacted",
    desc: "Empowered through our Paathshala centers, outreach programs, and educational initiatives.",
  },
  {
    target: 20,
    suffix: "+",
    label: "Schools Reached",
    desc: "Connecting IIT Ropar student volunteers with children across government schools.",
  },
  {
    target: 500,
    suffix: "+",
    label: "Volunteers So Far",
    desc: "Dedicated student and faculty volunteers driving continuous change and mentorship.",
  },
  {
    target: 25,
    suffix: "+",
    label: "Vigyanotsav Teams",
    desc: "School teams participating in our flagship annual science exhibition & innovation festival.",
  },
];

const OurImpact = () => {
  return (
    <section className="impact-section" id="our-impact">
      <div className="impact-container">
        <div className="impact-header">
          <span className="impact-kicker">MEASURABLE CHANGE</span>
          <h2 className="impact-title">OUR IMPACT</h2>
          <p className="impact-lead">
            Every number represents a childhood nurtured and a family supported.
          </p>
        </div>

        <div className="impact-grid">
          {impactMetrics.map((item, index) => (
            <div key={index} className="impact-card">
              <div className="impact-card-top">
                <span className="impact-num">
                  <CountUp target={item.target} suffix={item.suffix} duration={2000} />
                </span>
                <span className="impact-accent-line"></span>
              </div>
              <h3 className="impact-label">{item.label}</h3>
              <p className="impact-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
