import React from "react";
import "../styles/componentsStyles/VisionMission.css";
import CountUp from "./CountUp";
import ScrollReveal from "./ScrollReveal";

const missionData = [
  {
    id: "01",
    title: "Bridging Worlds",
    description:
      "Connect privileged academic environments with marginalized communities, acting as a bridge for underprivileged children to realize their full potential.",
  },
  {
    id: "02",
    title: "Scientific Temperament",
    description:
      "Develop scientific temperament, rational understanding, and analytical thinking by introducing current technology and fundamental science through our guided outreach activities.",
  },
  {
    id: "03",
    title: "Holistic Upliftment",
    description:
      "Go beyond traditional education by utilizing diverse skill sets to impart health awareness, moral guidance, and the vital role of hygiene in life.",
  },
  {
    id: "04",
    title: "Equality and Awareness",
    description:
      "Foster gender equality and cultivate deep educational awareness through seminars, basic aids, and active dialogues.",
  },
  {
    id: "05",
    title: "Collective Empathy",
    description:
      "Inspire individuals to take collective responsibility for the well-being of deprived children, motivating collective action to build educational stability.",
  },
];

const VisionMission = () => {
  return (
    <section className="vision-mission-section" id="vision-mission">
      {/* Section Header */}
      <ScrollReveal direction="up">
        <div className="vm-header">
          <span className="vm-kicker">OUR PURPOSE & PRINCIPLES</span>
          <h2 className="vm-title">OUR VISION & MISSION</h2>
          <p className="vm-lead">
            Our purpose is rooted deeply in the collective upliftment of our
            communities. Guided by our foundational objectives, we aim to:
          </p>
        </div>
      </ScrollReveal>

      {/* Split Vision & Mission Layout (Golden & Black Theme) */}
      <div className="vm-split-container">
        {/* Left Golden-Black Vision Banner - Slide from Left */}
        <ScrollReveal direction="left" className="vm-split-left-wrapper">
          <div className="vm-split-left">
            <div className="vm-split-banner-content">
              <span className="vm-split-pill">FOUNDATIONAL PILLARS</span>
              <h3 className="vm-split-banner-title">
                Uplifting Through Action & Collective Empathy
              </h3>
              <p className="vm-split-banner-desc">
                We believe that sustainable change happens when academic excellence
                meets compassionate ground action. Guided by our core values, our
                mission drives every initiative across our Paathshalas and Outreach
                programs.
              </p>
            </div>

            <div className="vm-split-stats">
              <div className="vm-split-stat-item">
                <span className="stat-num">
                  <CountUp target={5} suffix="" duration={1500} />
                </span>
                <span className="stat-label">Core Objectives</span>
              </div>
              <div className="vm-split-stat-divider"></div>
              <div className="vm-split-stat-item">
                <span className="stat-num">
                  <CountUp target={100} suffix="%" duration={2000} />
                </span>
                <span className="stat-label">Volunteer Driven</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Mission Feature Items - Slide from Right */}
        <ScrollReveal direction="right" delay={150} className="vm-split-right-wrapper">
          <div className="vm-split-right">
            {missionData.map((item) => (
              <div key={item.id} className="vm-split-item">
                <div className="vm-split-num">{item.id}</div>
                <div className="vm-split-text">
                  <h3 className="vm-highlight-title">{item.title}</h3>
                  <p className="vm-split-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisionMission;
