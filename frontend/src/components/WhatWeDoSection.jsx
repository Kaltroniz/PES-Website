import React from "react";
import { Link } from "react-router-dom";
import "../styles/componentsStyles/WhatWeDoSection.css";
import paathshalaImg from "../assets/home-page-our-work-pathshala-2.jpg";
import outreachImg from "../assets/home-page-our-work-outreach-2.jpg";
import ScrollReveal from "./ScrollReveal";

const WhatWeDoSection = () => {
  return (
    <section className="what-we-do-section" id="what-we-do">
      <ScrollReveal direction="up">
        <div className="wwd-header">
          <span className="wwd-kicker">CORE INITIATIVES</span>
          <h2 className="wwd-title">WHAT WE DO</h2>
          <p className="wwd-lead">
            We strive to bring comfort and steady guidance to the lives of young
            learners through two primary avenues:
          </p>
        </div>
      </ScrollReveal>

      <div className="wwd-grid">
        {/* Paathshala Card - Slide from Left */}
        <ScrollReveal direction="left">
          <div className="wwd-card">
            <div className="wwd-img-container">
              <img src={paathshalaImg} alt="Paathshala Initiative" />
              <div className="wwd-img-badge">PRIMARY AVENUE 01</div>
            </div>
            <div className="wwd-card-content">
              <h3 className="wwd-card-title">PAATHSHALA</h3>
              <p className="wwd-card-desc">
                We create safe, welcoming spaces within communities where we provide
                daily tuition, assist with formal school admissions, and ensure safe
                travel to and from classrooms. We also take care of all resources and
                stationery items to avoid any hurdles in their educational journey.
              </p>
              <Link to="/paathshala" className="wwd-btn">
                Explore Paathshala &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Outreach Card - Slide from Right */}
        <ScrollReveal direction="right" delay={150}>
          <div className="wwd-card">
            <div className="wwd-img-container">
              <img src={outreachImg} alt="Outreach Initiative" />
              <div className="wwd-img-badge">PRIMARY AVENUE 02</div>
            </div>
            <div className="wwd-card-content">
              <h3 className="wwd-card-title">OUTREACH</h3>
              <p className="wwd-card-desc">
                We bring the joy of learning to life through hands-on learning,
                demonstrative learning, and experiential learning. This encompasses
                our interactive sessions, mentorship, teacher training programs, and
                career counselling to help students chart their own paths.
              </p>
              <Link to="/outreach" className="wwd-btn">
                Explore Outreach &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
