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
          <div className="wwd-card wwd-card-teal">
            <div className="wwd-img-container">
              <img src={paathshalaImg} alt="Paathshala Initiative" />
              <div className="wwd-img-badge wwd-badge-teal">PRIMARY AVENUE 01</div>
            </div>
            <div className="wwd-card-content">
              <h3 className="wwd-card-title">PAATHSHALA</h3>
              <p className="wwd-card-desc">
                Providing <strong>free daily tuition classes</strong>, sponsoring formal admissions into <strong>KV & JNV schools</strong>, and supplying complete educational resources & safe transport for underprivileged children.
              </p>
              <Link to="/paathshala" className="wwd-btn wwd-btn-teal">
                Explore Paathshala &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Outreach Card - Slide from Right */}
        <ScrollReveal direction="right" delay={150}>
          <div className="wwd-card wwd-card-green">
            <div className="wwd-img-container">
              <img src={outreachImg} alt="Outreach Initiative" />
              <div className="wwd-img-badge wwd-badge-green">PRIMARY AVENUE 02</div>
            </div>
            <div className="wwd-card-content">
              <h3 className="wwd-card-title">OUTREACH</h3>
              <p className="wwd-card-desc">
                Fostering <strong>scientific temper, STEM innovation, and financial literacy</strong> through hands-on workshops, career counselling sessions, and Atal Tinkering Labs (ATL) teacher training.
              </p>
              <Link to="/outreach" className="wwd-btn wwd-btn-green">
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
