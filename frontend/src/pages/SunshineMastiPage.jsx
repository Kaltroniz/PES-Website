import React, { useState, useEffect } from "react";
import "../styles/pagesStyles/SunshineMastiPage.css";
import Events from "../components/Events";
import ScrollReveal from "../components/ScrollReveal";
import JoinJourneyCTA from "../components/JoinJourneyCTA";
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import request from "../request.js";

// Icons
import {
  FaPalette,
  FaGamepad,
  FaTheaterMasks,
  FaBrain,
  FaLightbulb,
  FaUsers,
  FaImages,
} from "react-icons/fa";

// Image Assets
import paathshalaAct1 from "../assets/paathshala_activity_1.png";
import paathshalaAct3 from "../assets/paathshala_activity_3.jpg";
import paathshalaAct4 from "../assets/paathshala_activity_4.png";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";

// Real Sunshine Masti Hero & Polaroid Photos
import sunshineHero from "../assets/sunshinemasti/sunshine_hero.jpg";
import sunshinePol1 from "../assets/sunshinemasti/sunshine_polaroid_1.jpg";
import sunshinePol2 from "../assets/sunshinemasti/sunshine_polaroid_2.png";
import sunshinePol3 from "../assets/sunshinemasti/sunshine_polaroid_3.png";
import sunshinePol4 from "../assets/sunshinemasti/sunshine_polaroid_4.jpg";
import sunshinePol5 from "../assets/sunshinemasti/sunshine_polaroid_5.png";
import sunshinePol6 from "../assets/sunshinemasti/sunshine_polaroid_6.png";

// Top Hero Photo
const heroPhotos = [
  sunshineHero,
];

// Real 6 Photos for Polaroid Frames
const polaroidPhotos6 = [
  { img: sunshinePol1 },
  { img: sunshinePol2 },
  { img: sunshinePol3 },
  { img: sunshinePol4 },
  { img: sunshinePol5 },
  { img: sunshinePol6 },
];

function SunshineMastiPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    request
      .get(`${import.meta.env.VITE_API_BASE}/events/list?type=sunshinemasti`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data);
        }
        console.log("Sunshine Masti events fetched successfully");
      })
      .catch((err) => console.log("Error fetching Sunshine Masti events:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="sunshine-page">
      {/* 1. HERO BANNER */}
      <section className="sunshine-hero">
        <div className="sunshine-hero-slides">
          {heroPhotos.map((imgSrc, index) => (
            <div
              key={index}
              className={`sunshine-hero-slide ${
                index === currentHeroSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${imgSrc})` }}
            />
          ))}
        </div>

        <div className="sunshine-hero-overlay"></div>

        <div className="sunshine-hero-container">
          <ScrollReveal direction="up">
            <h1 className="sunshine-hero-title">Sunshine Masti</h1>
            <p className="sunshine-hero-subtitle">
              Annual 45-Day Summer Camp | Paathshala Initiative
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="sunshine-stats-bar">
        <div className="sunshine-stats-container">
          <div className="sunshine-stat-box">
            <div className="sunshine-stat-number">45 Days</div>
            <div className="sunshine-stat-label">Annual Summer Camp</div>
          </div>
          <div className="sunshine-stat-divider"></div>
          <div className="sunshine-stat-box">
            <div className="sunshine-stat-number">100+</div>
            <div className="sunshine-stat-label">Creative Workshops</div>
          </div>
          <div className="sunshine-stat-divider"></div>
          <div className="sunshine-stat-box">
            <div className="sunshine-stat-number">70+</div>
            <div className="sunshine-stat-label">Children Impacted</div>
          </div>
        </div>
      </section>

      {/* 3. EVENT DETAILS CONTENT FROM EVENT.MD */}
      <section className="sunshine-content-section">
        <div className="sunshine-container">
          <ScrollReveal direction="up">
            <h2 className="content-heading">Sunshine Masti</h2>
            <p className="content-tagline">
              Learning outside the classroom, where children get to simply be children.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="content-text-block">
              <p>
                Sunshine Masti is our annual 45-day summer camp – a part of Paathshala project where learning steps outside the classroom. Children spend their summer exploring art, culture, creativity, general knowledge, teamwork, and a whole lot of fun.
              </p>
              <p>
                There are activities, games, crafts, conversations, and plenty of moments where children get to simply be children.
              </p>
            </div>
          </ScrollReveal>

          {/* What Happens Feature Grid */}
          <ScrollReveal direction="up" delay={150}>
            <div className="what-happens-wrapper">
              <h3 className="what-happens-heading">What happens:</h3>
              <div className="what-happens-grid">
                <div className="feature-card">
                  <div className="feature-icon-wrap"><FaPalette /></div>
                  <h4 className="feature-title">Art & Craft Activities</h4>
                  <p className="feature-desc">Unleashing imagination with painting, clay modeling, origami, and handmade creations.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrap"><FaGamepad /></div>
                  <h4 className="feature-title">Games & Team Activities</h4>
                  <p className="feature-desc">Building sportsmanship, agility, and friendship through outdoor & indoor group games.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrap"><FaTheaterMasks /></div>
                  <h4 className="feature-title">Cultural Activities</h4>
                  <p className="feature-desc">Music, dance, storytelling, and stage performances celebrating cultural heritage.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrap"><FaBrain /></div>
                  <h4 className="feature-title">General Knowledge Sessions</h4>
                  <p className="feature-desc">Interactive quizzes, science facts, world trivia, and horizon-expanding talks.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrap"><FaLightbulb /></div>
                  <h4 className="feature-title">Creative Challenges</h4>
                  <p className="feature-desc">Problem-solving exercises, puzzles, and innovation competitions for young minds.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrap"><FaUsers /></div>
                  <h4 className="feature-title">Collaborative Learning</h4>
                  <p className="feature-desc">Group projects and peer mentorship fostering confidence, empathy, and leadership.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. POLAROID MEMORIES GRID (OPTION 1 - CLEAN WITHOUT TEXT LABELS) */}
      <section className="sunshine-demo-section style1-bg">
        <div className="sunshine-container">
          <ScrollReveal direction="up">
            <div className="demo-header">
              <span className="demo-badge style1-badge">
                <FaImages style={{ marginRight: "6px" }} /> SUNSHINE MASTI GALLERY
              </span>
              <h2 className="demo-title">Summer Camp Memories</h2>
              <p className="demo-desc">
                Moments of joy, creativity, learning, and fun from our 45-day summer camp.
              </p>
            </div>
          </ScrollReveal>

          <div className="polaroid-grid">
            {polaroidPhotos6.map((item, idx) => (
              <div key={idx} className={`polaroid-card rotate-pos-${(idx % 4) + 1}`}>
                <div className="polaroid-pin"></div>
                <div className="polaroid-img-box">
                  <img src={item.img} alt={`Sunshine Masti Memory ${idx + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC BACKEND EVENTS (IF CREATED IN BACKEND) */}
      {events.length > 0 && (
        <section className="sunshine-events-list-section">
          <div className="sunshine-container">
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

      {/* REUSABLE JOIN OUR JOURNEY CTA */}
      <JoinJourneyCTA />

      {/* Sticky CTAs */}
      <StickyJoinButton />
      <StickyDonateButton />
    </div>
  );
}

export default SunshineMastiPage;
