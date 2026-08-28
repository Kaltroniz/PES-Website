import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pagesStyles/PaathshalaPage.css";
import ScrollReveal from "../components/ScrollReveal";
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";

// Icons
import {
  FaGraduationCap,
  FaBus,
  FaBookOpen,
  FaSchool,
  FaAppleAlt,
  FaPalette,
  FaMapMarkerAlt,
  FaHeart,
  FaHandsHelping,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// 5 Slideshow Images
import slide1 from "../assets/paathshala_slide_1.jpg";
import slide2 from "../assets/paathshala_slide_2.jpg";
import slide3 from "../assets/paathshala_slide_3.jpg";
import slide4 from "../assets/paathshala_slide_4.jpg";
import slide5 from "../assets/paathshala_slide_5.jpg";

// New Paathshala Activity Photos
import paathshalaAct1 from "../assets/paathshala_activity_1.png";
import paathshalaAct2 from "../assets/paathshala_activity_2.png";
import paathshalaAct3 from "../assets/paathshala_activity_3.jpg";
import paathshalaAct4 from "../assets/paathshala_activity_4.png";
import paathshalaAct5 from "../assets/paathshala_activity_5.png";

// Additional Project Images
import paathshalaHero from "../assets/home_hero_paathshala.png";
import sssImg from "../assets/home_hero_sss.jpg";
import paathshalaClass from "../assets/home-page-our-work-pathshala.jpg";
import paathshalaClass2 from "../assets/home-page-our-work-pathshala-2.jpg";
import paathshalaOld from "../assets/paathshala.jpg";
import sunshineImg from "../assets/about-2.jpg";
import about1 from "../assets/about-1.jpg";
import about3 from "../assets/about-3.jpg";

const heroSlides = [paathshalaAct3, slide1, paathshalaAct1, slide4, paathshalaAct4, slide2];
const storySlides = [paathshalaAct1, paathshalaAct3, paathshalaAct2, paathshalaAct4, paathshalaAct5, slide1];

const marqueeRow1 = [
  { img: paathshalaAct1 },
  { img: paathshalaAct3 },
  { img: slide1 },
  { img: paathshalaAct4 },
  { img: paathshalaClass },
  { img: slide2 },
  { img: sunshineImg },
];

const marqueeRow2 = [
  { img: paathshalaAct2 },
  { img: paathshalaAct5 },
  { img: sssImg },
  { img: slide4 },
  { img: paathshalaOld },
  { img: slide5 },
  { img: paathshalaClass2 },
];

function PaathshalaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStorySlide, setCurrentStorySlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Automatic background crossfade timer for Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Automatic slide timer for Story Slider
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentStorySlide((prev) => (prev + 1) % storySlides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNextStory = () => {
    setCurrentStorySlide((prev) => (prev + 1) % storySlides.length);
  };

  const handlePrevStory = () => {
    setCurrentStorySlide((prev) =>
      prev === 0 ? storySlides.length - 1 : prev - 1
    );
  };

  const initiatives = [
    {
      title: "Main Campus Paathshala",
      tag: "INITIATIVE 1",
      img: paathshalaClass,
      text: "Caring for over 89 children, providing daily evening tuitions, arranging transportation, and running continuous enrolment drives to ensure girls, especially, are never left behind.",
    },
    {
      title: "Navodaya Entrance Examination Preparation",
      tag: "INITIATIVE 2",
      img: paathshalaHero,
      text: "Mentoring students for the Jawahar Navodaya Vidyalaya entrance examination.",
    },
    {
      title: "School Safar Saathi",
      tag: "INITIATIVE 3",
      img: sssImg,
      text: "Every child deserves someone who believes in their potential. Safar Saathi supports students from economically weaker backgrounds by providing the guidance and mentorship they often lack at home, helping them grow beyond average and succeed in school.",
    },
    {
      title: "Sunshine Masti",
      tag: "INITIATIVE 4",
      img: sunshineImg,
      text: "A 45-day annual summer programme promoting art, culture, general knowledge, and humane values through fun and interactive activities.",
    },
  ];

  const centers = [
    {
      name: "Main Campus",
      desc: "One of our active Paathshala learning centers.",
    },
    {
      name: "Gaushala",
      desc: "One of our active Paathshala learning centers.",
    },
    {
      name: "Sadabrat Slums",
      desc: "One of our active Paathshala learning centers.",
    },
  ];

  return (
    <div className="paathshala-page">
      {/* 1. HERO BANNER WITH BACKGROUND CROSSFADE SLIDESHOW */}
      <section className="paathshala-hero">
        {/* Dynamic Crossfade Background Images */}
        <div className="paathshala-hero-slides">
          {heroSlides.map((imgSrc, index) => (
            <div
              key={index}
              className={`paathshala-hero-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${imgSrc})` }}
            />
          ))}
        </div>

        {/* Dark Gradient Overlay for Readability */}
        <div className="paathshala-hero-overlay"></div>

        {/* Static Foreground Content */}
        <div className="paathshala-hero-container">
          <ScrollReveal direction="up">
            <h1 className="paathshala-hero-title">
              PAATHSHALA
              <span className="paathshala-title-sub">
                The Heart of Our Journey
              </span>
            </h1>
            <p className="paathshala-hero-lead">
              Paathshala is our flagship education initiative dedicated to
              ensuring that children from underserved communities have access to
              quality education and equal opportunities.
            </p>
            <div className="paathshala-hero-cta">
              <Link to="/joinus" className="paathshala-btn-primary">
                Join Us <FaArrowRight />
              </Link>
              <Link to="/donate" className="paathshala-btn-secondary">
                Support Our Cause <FaHeart />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Interactive Slide Indicator Dots Pinned at Bottom */}
        <div className="paathshala-hero-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* PAATHSHALA STATS BAR */}
      <section className="paathshala-stats-bar">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-number">70+</div>
            <div className="stat-label">Children Impacted</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-number">2 Hours / Week</div>
            <div className="stat-label">Volunteer Teaching Hours</div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="paathshala-story-section">
        <div className="paathshala-container">
          <div className="story-grid">
            <ScrollReveal direction="left" className="story-text-col">
              <span className="section-kicker">ABOUT PAATHSHALA</span>
              <h2 className="section-heading">The Heart of Our Journey</h2>
              <p className="story-para">
                Paathshala is our flagship education initiative dedicated to
                ensuring that children from underserved communities have access
                to quality education and equal opportunities. Through the
                commitment of our student volunteers, we provide daily evening
                tuition, support with school admissions, transportation,
                educational materials, and other essential assistance that helps
                children continue their education without financial or social
                barriers.
              </p>
              <p className="story-para">
                Beyond academics, we organise health and hygiene awareness
                programmes, creative learning activities, value-based education,
                and career guidance to promote the holistic development of every
                child.
              </p>
              <p className="story-para story-highlight-para">
                <strong>
                  Today, Paathshala reaches more than 150 children through
                  multiple learning centres and educational programmes.
                </strong>
              </p>
            </ScrollReveal>

            <ScrollReveal
              direction="right"
              delay={150}
              className="story-img-col"
            >
              <div
                className="story-carousel-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="story-slides-track">
                  {storySlides.map((imgSrc, sIdx) => (
                    <div
                      key={sIdx}
                      className={`story-slide-item ${
                        sIdx === currentStorySlide ? "active" : ""
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`PES Paathshala Activity ${sIdx + 1}`}
                        className="story-carousel-img"
                      />
                    </div>
                  ))}
                </div>

                {/* Left & Right Arrow Controls */}
                <button
                  className="story-nav-btn story-prev-btn"
                  onClick={handlePrevStory}
                  aria-label="Previous Slide"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="story-nav-btn story-next-btn"
                  onClick={handleNextStory}
                  aria-label="Next Slide"
                >
                  <FaChevronRight />
                </button>

                {/* Bottom Navigation Dots */}
                <div className="story-dots-wrap">
                  {storySlides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      className={`story-dot ${
                        dotIdx === currentStorySlide ? "active" : ""
                      }`}
                      onClick={() => setCurrentStorySlide(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (PAATHSHALA) */}
      <section className="paathshala-pillars-section">
        <div className="paathshala-container">
          <ScrollReveal direction="up">
            <div className="section-header-center">
              <span className="section-kicker">WHAT WE DO</span>
              <h2 className="section-heading">Safe Spaces & Complete Support</h2>
              <p className="section-subtext">
                We create safe, welcoming spaces within communities where we
                provide daily tuition, assist with formal school admissions, and
                ensure safe travel to and from classrooms. We also take care of
                all resources and stationary items to avoid any hurdles in their
                educational journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="pillars-grid">
            {[
              {
                icon: <FaGraduationCap />,
                title: "Daily Tuition",
                desc: "Providing daily evening tuition classes conducted by student volunteers.",
              },
              {
                icon: <FaSchool />,
                title: "School Admissions",
                desc: "Assisting children with formal school admissions and enrollment drives.",
              },
              {
                icon: <FaBus />,
                title: "Safe Transportation",
                desc: "Ensuring safe travel to and from classrooms for all students.",
              },
              {
                icon: <FaBookOpen />,
                title: "Resources & Stationery",
                desc: "Taking care of all resources and stationery items to avoid hurdles.",
              },
              {
                icon: <FaAppleAlt />,
                title: "Health & Hygiene",
                desc: "Organising health and hygiene awareness programmes for children.",
              },
              {
                icon: <FaPalette />,
                title: "Holistic Development",
                desc: "Creative learning activities, value-based education, and career guidance.",
              },
            ].map((pillar, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 80}
                className="pillar-card-wrapper"
              >
                <div className="dark-glass-pillar-card">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR INITIATIVES */}
      <section className="paathshala-initiatives-section">
        <div className="paathshala-container">
          <ScrollReveal direction="up">
            <div className="section-header-center">
              <span className="section-kicker">PROJECT INITIATIVES</span>
              <h2 className="section-heading">Our Initiatives</h2>
            </div>
          </ScrollReveal>

          <div className="initiatives-list">
            {initiatives.map((item, idx) => (
              <ScrollReveal
                key={idx}
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={100}
                className="initiative-row-wrapper"
              >
                <div
                  className={`initiative-row ${
                    idx % 2 !== 0 ? "initiative-reverse" : ""
                  }`}
                >
                  <div className="initiative-img-box">
                    <img src={item.img} alt={item.title} />
                  </div>

                  <div className="initiative-info-box">
                    <span className="initiative-tag">{item.tag}</span>
                    <h3 className="initiative-title">{item.title}</h3>
                    <p className="initiative-desc">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PAATHSHALA CENTERS */}
      <section className="paathshala-centers-section">
        <div className="paathshala-container">
          <ScrollReveal direction="up">
            <div className="section-header-center">
              <span className="section-kicker">OUR CENTERS</span>
              <h2 className="section-heading">
                150+ Children Embraced Across Our Learning Centers
              </h2>
              <p className="section-subtext">
                Every number represents a childhood nurtured and a family
                supported across our Paathshala centers:
              </p>
            </div>
          </ScrollReveal>

          <div className="centers-grid">
            {centers.map((center, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 100}
                className="center-card-wrapper"
              >
                <div className="center-card">
                  <div className="center-header">
                    <div className="center-icon-wrap">
                      <FaMapMarkerAlt />
                    </div>
                  </div>
                  <h3 className="center-title">{center.name}</h3>
                  <p className="center-desc">{center.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DUAL-ROW INFINITE FLOATING MARQUEE REEL (IDEA 3) */}
      <section className="paathshala-reel-section">
        <div className="paathshala-container">
          <ScrollReveal direction="up">
            <div className="section-header-center">
              <span className="section-kicker">LIFE AT PAATHSHALA</span>
              <h2 className="section-heading">Every Smile Tells a Story</h2>
              <p className="section-subtext">
                A glimpse into the daily joy, curious questions, and bright dreams nurtured across our evening learning centers.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Dual Marquee Track */}
        <div className="reel-wrapper">
          {/* Row 1 - Moving Left */}
          <div className="reel-row reel-row-left">
            <div className="reel-track">
              {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="reel-card"
                >
                  <div className="reel-img-container">
                    <img src={item.img} alt={`Paathshala Moment ${idx + 1}`} className="reel-img" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Right */}
          <div className="reel-row reel-row-right">
            <div className="reel-track">
              {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="reel-card"
                >
                  <div className="reel-img-container">
                    <img src={item.img} alt={`Paathshala Moment ${idx + 1}`} className="reel-img" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="paathshala-cta-section">
        <div className="paathshala-container">
          <ScrollReveal direction="up">
            <div className="paathshala-cta-box">
              <span className="cta-kicker">JOIN OUR JOURNEY</span>
              <h2 className="cta-heading">Be a part of this journey</h2>
              <p className="cta-desc">
                The smallest gesture of kindness can rewrite a child's story.
              </p>
              <div className="cta-buttons">
                <Link to="/donate" className="cta-btn-gold">
                  Support Our Cause (UPI: 9463737258@ybl) <FaHeart />
                </Link>
                <Link to="/joinus" className="cta-btn-outline">
                  Join as Volunteer <FaHandsHelping />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky Floating CTA Buttons */}
      <StickyJoinButton />
      <StickyDonateButton />
    </div>
  );
}

export default PaathshalaPage;
