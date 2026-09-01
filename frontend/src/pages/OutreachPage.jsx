import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pagesStyles/OutreachPage.css";
import ScrollReveal from "../components/ScrollReveal";
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import Events from "../components/Events";
import request from "../request.js";

// Icons
import {
  FaFlask,
  FaHeartbeat,
  FaLeaf,
  FaHeart,
  FaHandsHelping,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Image Assets
import outreachHero from "../assets/home_hero_outreach.jpg";
import outreachWork1 from "../assets/home-page-our-work-outreach.jpg";
import outreachWork2 from "../assets/home-page-our-work-outreach-2.jpg";
import atlHero from "../assets/home_hero_atl.jpg";
import heroImg4 from "../assets/hero_image4.jpg";
// Outreach Photos from Activities
import outreachPlantation1 from "../assets/outreach/outreach_plantation_1.jpg";
import outreachPlantation2 from "../assets/outreach/outreach_plantation_2.png";
import outreach1 from "../assets/outreach/outreach_1.jpg";
import outreach2 from "../assets/outreach/outreach_2.jpg";
import outreach3 from "../assets/outreach/outreach_3.jpg";
import outreach4 from "../assets/outreach/outreach_4.jpg";
import outreach5 from "../assets/outreach/outreach_5.jpg";
import outreach6 from "../assets/outreach/outreach_6.jpg";
import outreach7 from "../assets/outreach/outreach_7.jpg";
import outreach8 from "../assets/outreach/outreach_8.jpg";
import outreach9 from "../assets/outreach/outreach_9.jpg";
import outreach10 from "../assets/outreach/outreach_10.jpg";
import outreach11 from "../assets/outreach/outreach_11.jpg";
import outreach12 from "../assets/outreach/outreach_12.jpg";
import outreach13 from "../assets/outreach/outreach_13.jpg";

// Health & Hygiene Awareness Photos (Batch 2)
import health1 from "../assets/outreach/health_1.jpg";
import health2 from "../assets/outreach/health_2.png";
import health3 from "../assets/outreach/health_3.jpg";
import health4 from "../assets/outreach/health_4.jpg";
import health5 from "../assets/outreach/health_5.jpg";
import health6 from "../assets/outreach/health_6.jpg";
import health7 from "../assets/outreach/health_7.png";
import health8 from "../assets/outreach/health_8.png";

const heroSlides = [
  outreachPlantation1,
  health7,
  outreachHero,
  outreachWork1,
  health2,
  atlHero,
  outreachWork2,
  outreachPlantation2,
  heroImg4,
];

const storySlides = [
  health7,
  outreachPlantation2,
  outreachWork1,
  health4,
  outreachHero,
  outreachPlantation1,
  atlHero,
  outreachWork2,
  heroImg4,
];

const outreachGalleryImages = [
  outreachPlantation1,
  health7,
  health2,
  outreachPlantation2,
  health4,
  health8,
  outreach1,
  outreach2,
  health1,
  health6,
  outreach3,
  outreach4,
  health3,
  health5,
  outreach5,
  outreach6,
  outreach7,
  outreach8,
  outreach9,
  outreach10,
  outreach11,
  outreach12,
  outreach13,
  atlHero,
];

function OutreachPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStorySlide, setCurrentStorySlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch dynamic events from backend if available
    request
      .get(`${import.meta.env.VITE_API_BASE}/events/list?type=outreach`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data);
        }
      })
      .catch((err) => console.log("Error fetching outreach events:", err))
      .finally(() => setLoading(false));
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

  const focusAreas = [
    {
      icon: <FaFlask />,
      title: "Practical Sciences & Scientific Inquiry",
      tag: "FOCUS 1",
      theme: "theme-science",
      content: (
        <>
          <p className="focus-desc">
            Hands-on learning through demonstrations, workshops, and science fairs.
          </p>
          <p className="focus-desc">
            We work closely with <strong>Atal Tinkering Labs (ATLs)</strong> to encourage innovation, DIY projects, and creative problem-solving.
          </p>
        </>
      ),
    },
    {
      icon: <FaHeartbeat />,
      title: "Health, Hygiene & Life Skills",
      tag: "FOCUS 2",
      theme: "theme-health",
      content: (
        <>
          <p className="focus-desc">
            Promoting healthy lifestyle habits, mental well-being, and hygiene awareness.
          </p>
          <p className="focus-desc">
            Sessions include health checkups, dental hygiene workshops, and balanced nutrition talks.
          </p>
        </>
      ),
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Stewardship",
      tag: "FOCUS 3",
      theme: "theme-environment",
      content: (
        <>
          <p className="focus-desc">
            Building awareness around sustainable living, waste management, and conservation.
          </p>
          <p className="focus-desc">
            Activities include tree plantation drives and eco-friendly workshops.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="outreach-page">
      {/* 1. HERO BANNER WITH BACKGROUND CROSSFADE SLIDESHOW */}
      <section className="outreach-hero">
        <div className="outreach-hero-slides">
          {heroSlides.map((imgSrc, index) => (
            <div
              key={index}
              className={`outreach-hero-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${imgSrc})` }}
            />
          ))}
        </div>

        <div className="outreach-hero-overlay"></div>

        <div className="outreach-hero-container">
          <ScrollReveal direction="up">
            <h1 className="outreach-hero-title">
              OUTREACH
              <span className="outreach-title-sub">
                Igniting Curiosity, Expanding Horizons
              </span>
            </h1>
            <p className="outreach-hero-lead">
              Extending the joy of learning beyond our centers through
              interactive school sessions, science workshops, and community
              initiatives across Punjab.
            </p>
            <div className="outreach-hero-cta">
              <Link to="/joinus" className="outreach-btn-primary">
                Join Us <FaArrowRight />
              </Link>
              <Link to="/donate" className="outreach-btn-secondary">
                Support Our Cause <FaHeart />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="outreach-hero-dots">
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

      {/* 2. STATS BAR */}
      <section className="outreach-stats-bar">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-number">30+</div>
            <div className="stat-label">Outreach Sessions</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-number">50+</div>
            <div className="stat-label">Futures Guided</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-number">60+</div>
            <div className="stat-label">Teachers Supported</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <div className="stat-number">25+</div>
            <div className="stat-label">School Teams in Vigyanotsav</div>
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW & PHILOSOPHY */}
      <section className="outreach-story-section">
        <div className="outreach-container">
          <div className="story-grid">
            <ScrollReveal direction="left" className="story-text-col">
              <span className="section-kicker">ABOUT OUTREACH</span>
              <h2 className="section-heading">
                Taking Learning Beyond the Classroom
              </h2>
              <p className="story-para">
                Our Outreach programme brings <strong>hands-on STEM learning</strong>, <strong>experiential workshops</strong>, and <strong>interactive mentorship</strong> to government schools and colleges across Ropar and Punjab.
              </p>
              <p className="story-para">
                Led by <strong>IIT Ropar student volunteers</strong>, we inspire scientific temperament, conduct teacher training, and provide career counselling to bridge the gap between classroom theory and real-world innovation.
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
                        alt={`PES Outreach Activity ${sIdx + 1}`}
                        className="story-carousel-img"
                      />
                    </div>
                  ))}
                </div>

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

      {/* 4. OUR FOCUS AREAS (3 CARDS) */}
      <section className="outreach-focus-section">
        <div className="outreach-container">
          <ScrollReveal direction="up">
            <div className="section-header-center">
              <span className="section-kicker">CORE THEMES</span>
              <h2 className="section-heading">Our Focus Areas</h2>
              <p className="section-subtext">
                Designed to nurture well-rounded perspectives covering practical
                sciences, healthy lifestyles, and environmental stewardship.
              </p>
            </div>
          </ScrollReveal>

          <div className="focus-grid">
            {focusAreas.map((area, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 100}
                className="focus-card-wrapper"
              >
                <div className={`focus-card ${area.theme}`}>
                  <div className="focus-icon-box">{area.icon}</div>
                  <span className="focus-tag">{area.tag}</span>
                  <h3 className="focus-title">{area.title}</h3>
                  {area.content}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MOMENTS THAT MATTER - PURE PHOTO GALLERY */}
      <section className="outreach-gallery-section">
        <div className="outreach-container">
          <ScrollReveal direction="up">
            <div className="section-header-center">
              <span className="section-kicker">PHOTO GALLERY</span>
              <h2 className="section-heading">Moments That Matter</h2>
              <p className="section-subtext">
                A glimpse into our journey — from classrooms to communities, every frame tells a story of impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="gallery-clean-grid">
            {outreachGalleryImages.map((imgSrc, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={(idx % 4) * 40}
                className={`gallery-item-wrap ${
                  idx % 6 === 0 || idx % 6 === 5 ? "item-featured" : ""
                }`}
              >
                <div className="gallery-clean-card">
                  <img
                    src={imgSrc}
                    alt={`PES Outreach Moment ${idx + 1}`}
                    className="gallery-clean-img"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DYNAMIC EVENTS SECTION (IF ANY EVENTS AVAILABLE) */}
      {events.length > 0 && (
        <section className="outreach-events-section">
          <div className="outreach-container">
            <ScrollReveal direction="up">
              <div className="section-header-center">
                <span className="section-kicker">ACTIVITIES & WORKSHOPS</span>
                <h2 className="section-heading">Recent Outreach Events</h2>
              </div>
            </ScrollReveal>
            <Events>
              {events.map((event) => (
                <Events.Tile
                  key={event._id || event.id}
                  title={event.title}
                  date={event.date}
                  image={event.images}
                  description={event.description}
                  id={event._id}
                />
              ))}
            </Events>
          </div>
        </section>
      )}

      {/* 7. CALL TO ACTION */}
      <section className="outreach-cta-section">
        <div className="outreach-container">
          <ScrollReveal direction="up">
            <div className="outreach-cta-box">
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

export default OutreachPage;