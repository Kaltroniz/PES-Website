import React, { useState, useEffect } from "react";
import "../styles/pagesStyles/OtherEventsPage.css";
import Events from "../components/Events";
import ScrollReveal from "../components/ScrollReveal";
import JoinJourneyCTA from "../components/JoinJourneyCTA";
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import request from "../request.js";

// Icons
import {
  FaChalkboardTeacher,
  FaCampground,
  FaStore,
  FaLightbulb,
  FaUserGraduate,
  FaCompass,
  FaComments,
  FaQuestionCircle,
  FaGift,
  FaHeart,
  FaAward,
  FaPaintBrush,
  FaSmile,
  FaSun,
  FaStar,
} from "react-icons/fa";

// Real Special Events Hero Photos
import heroPhoto1 from "../assets/otherevents/otherevents_hero_1.png";
import heroPhoto2 from "../assets/otherevents/otherevents_hero_2.png";
import heroPhoto3 from "../assets/otherevents/otherevents_hero_3.jpg";
import heroPhoto4 from "../assets/otherevents/otherevents_hero_4.jpg";
import heroPhoto5 from "../assets/otherevents/otherevents_hero_5.jpg";

// Real Diya Initiative Photos
import diyaPhoto1 from "../assets/otherevents/diya_initiative_1.jpg";
import diyaPhoto2 from "../assets/otherevents/diya_initiative_2.jpg";
import diyaPhoto3 from "../assets/otherevents/diya_initiative_3.png";

const heroPhotos = [
  heroPhoto1,
  heroPhoto2,
  heroPhoto3,
  heroPhoto4,
  heroPhoto5,
];

function OtherEventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    request
      .get(`${import.meta.env.VITE_API_BASE}/events/list?type=others`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data);
        }
        console.log("Other events fetched successfully");
      })
      .catch((err) => console.log("Error fetching other events:", err))
      .finally(() => setLoading(false));
  }, []);

  // Automatic background crossfade timer for Hero Slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroPhotos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="otherevents-page">
      {/* 1. HERO BANNER WITH CROSSFADE SLIDER */}
      <section className="otherevents-hero">
        <div className="otherevents-hero-slides">
          {heroPhotos.map((imgSrc, index) => (
            <div
              key={index}
              className={`otherevents-hero-slide ${
                index === currentHeroSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${imgSrc})` }}
            />
          ))}
        </div>

        <div className="otherevents-hero-overlay"></div>

        <div className="otherevents-hero-container">
          <ScrollReveal direction="up">
            <span className="hero-badge-gold">PEHCHAAN INITIATIVES</span>
            <h1 className="otherevents-hero-title">Special Initiatives</h1>
            <p className="otherevents-hero-subtitle">
              Connecting minds, celebrating cultures, and showcasing purpose at IIT Ropar.
            </p>
          </ScrollReveal>
        </div>

        {/* Hero Slider Dots */}
        <div className="otherevents-hero-dots">
          {heroPhotos.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === currentHeroSlide ? "active" : ""}`}
              onClick={() => setCurrentHeroSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===================================================================
          SECTION 1: INVITED TALK (DARK CINEMATIC & VERTICAL NODE FLOW)
         =================================================================== */}
      <section className="initiative-section section-invited-talk">
        <div className="otherevents-container">
          <ScrollReveal direction="up">
            <div className="section-head-bar">
              <span className="section-kicker"><FaChalkboardTeacher /> INITIATIVE 01</span>
              <h2 className="section-main-title">Invited Talks</h2>
              <p className="section-tagline">
                "Meet people. Hear stories. Discover possibilities."
              </p>
            </div>
          </ScrollReveal>

          {/* Quote Spotlight */}
          <ScrollReveal direction="up" delay={100}>
            <div className="cinematic-quote-card">
              <div className="quote-mark">“</div>
              <p>
                Sometimes, one conversation can change the way a student looks at their future.
              </p>
            </div>
          </ScrollReveal>

          {/* 2-Column Split Showcase */}
          <ScrollReveal direction="up" delay={150}>
            <div className="talk-split-grid">
              {/* Left Column: Mission Narrative */}
              <div className="talk-mission-card">
                <h3>Beyond Textbooks</h3>
                <p>
                  Through our Invited Talks, we bring faculty members, professionals, researchers, and mentors into conversations with students. These sessions go beyond textbooks to talk about careers, education, environment & climate, opportunities, experiences, and the realities of different paths.
                </p>
                <div className="goal-highlight-box">
                  <FaLightbulb className="goal-icon" />
                  <span>The goal isn't to tell students what they should become. It is to help them discover what they could become.</span>
                </div>
              </div>

              {/* Right Column: Vertical Timeline Node Flow */}
              <div className="talk-node-flow">
                <div className="node-item">
                  <div className="node-badge"><FaUserGraduate /></div>
                  <div className="node-text">
                    <h4>Career & Academic Guidance</h4>
                    <p>Practical insights into higher studies, research fields, and career trajectories.</p>
                  </div>
                </div>

                <div className="node-item">
                  <div className="node-badge"><FaChalkboardTeacher /></div>
                  <div className="node-text">
                    <h4>IIT Ropar Faculty Interaction</h4>
                    <p>Direct mentoring sessions with IIT Ropar professors & researchers.</p>
                  </div>
                </div>

                <div className="node-item">
                  <div className="node-badge"><FaCompass /></div>
                  <div className="node-text">
                    <h4>Exposure to Diverse Paths</h4>
                    <p>Exploring non-traditional fields, science, technology, environment & climate.</p>
                  </div>
                </div>

                <div className="node-item">
                  <div className="node-badge"><FaQuestionCircle /></div>
                  <div className="node-text">
                    <h4>Interactive Q&A Sessions</h4>
                    <p>Open roundtables where students freely ask doubts and discuss real challenges.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 2: FESTIVAL CELEBRATIONS (WARM HUMAN-CRAFTED NARRATIVE)
         ========================================================================== */}
      <section className="initiative-section section-festivals">
        <div className="otherevents-container">
          <ScrollReveal direction="up">
            <div className="section-head-bar">
              <span className="section-kicker kicker-festive"><FaCampground /> INITIATIVE 02</span>
              <h2 className="section-main-title">Festival Celebrations</h2>
              <p className="section-tagline">
                "Different festivals. One community."
              </p>
            </div>
          </ScrollReveal>

          {/* Warm Narrative Box */}
          <ScrollReveal direction="up" delay={100}>
            <div className="festive-quote-box">
              <p className="festive-quote-text">
                "Festivals are more than decorations and sweets. They are stories, traditions, colours, food, music, and opportunities to come together."
              </p>
              <p className="festive-quote-sub">
                At Pehchaan, we celebrate both national and cultural festivals together — creating rangolis, painting diyas, decorating spaces, sharing traditions, and learning about the cultures around us.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Diya Stall Split Showcase */}
          <ScrollReveal direction="up" delay={150}>
            <div className="diya-glowing-card">
              <div className="diya-info-side">
                <div className="diya-head-badge">
                  <FaSun className="diya-badge-icon" />
                  <span>FEATURED INITIATIVE</span>
                </div>
                <h3>"One Diya One Donation"</h3>
                <p>
                  A special Diwali diya-painting activity and fundraising stall organized at IIT Ropar where children paint traditional clay diyas, celebrating art while raising funds for Paathshala education.
                </p>
                <div className="diya-impact-pill">
                  <FaHeart style={{ color: "#fbbf24", marginRight: "8px" }} />
                  <span>Handcrafted Art & Community Giving</span>
                </div>
              </div>

              {/* Right Side: 3-Photo Showcase Gallery Grid */}
              <div className="diya-photos-side">
                <div className="diya-photo-frame frame-1">
                  <img src={diyaPhoto1} alt="Handmade painted diyas circle arrangement" />
                  <span className="photo-label">Handcrafted Diyas</span>
                </div>

                <div className="diya-photo-frame frame-2">
                  <img src={diyaPhoto2} alt="Diya painting table display" />
                  <span className="photo-label">Diya Stall Display</span>
                </div>

                <div className="diya-photo-frame frame-3">
                  <img src={diyaPhoto3} alt="IIT Ropar volunteers stall" />
                  <span className="photo-label">IIT Ropar Volunteers</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Clean Authentic Activity Cards */}
          <ScrollReveal direction="up" delay={200}>
            <h3 className="festive-list-heading">Celebrations & Activities Include:</h3>
            <div className="festive-list-grid">
              <div className="festive-story-card">
                <div className="story-badge"><FaAward /></div>
                <div className="story-body">
                  <h4>Independence & Republic Day</h4>
                  <p>Patriotic flag hoisting, speech sessions, and cultural performances by children & mentors.</p>
                </div>
              </div>

              <div className="festive-story-card">
                <div className="story-badge"><FaPaintBrush /></div>
                <div className="story-body">
                  <h4>Diya Painting & Diya Stall</h4>
                  <p>Handmade diya creation promoting traditional craft skills and community donations.</p>
                </div>
              </div>

              <div className="festive-story-card">
                <div className="story-badge"><FaChalkboardTeacher /></div>
                <div className="story-body">
                  <h4>Teacher's Day Celebration</h4>
                  <p>Expressing gratitude to student volunteers with handmade greeting cards and flowers.</p>
                </div>
              </div>

              <div className="festive-story-card">
                <div className="story-badge"><FaGift /></div>
                <div className="story-body">
                  <h4>Festival Art & Crafts</h4>
                  <p>Designing festive paper crafts, eco-friendly rangolis, and festive room decorations.</p>
                </div>
              </div>

              <div className="festive-story-card">
                <div className="story-badge"><FaSmile /></div>
                <div className="story-body">
                  <h4>Cultural Performances</h4>
                  <p>Music, group dances, street plays (Nukkad Natak), and storytelling sessions by children.</p>
                </div>
              </div>

              <div className="festive-story-card">
                <div className="story-badge"><FaComments /></div>
                <div className="story-body">
                  <h4>Stories Across Cultures (Eid & Christmas)</h4>
                  <p>Sharing festive sweets, traditions, and stories celebrating unity in diversity.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================================================================
          SECTION 3: ZEITGEIST STALL (IIT ROPAR CULTURAL FEST SHOWCASE)
         =================================================================== */}
      <section className="initiative-section section-zeitgeist">
        <div className="otherevents-container">
          <ScrollReveal direction="up">
            <div className="section-head-bar">
              <span className="section-kicker kicker-zeitgeist"><FaStore /> INITIATIVE 03</span>
              <h2 className="section-main-title">Zeitgeist Stall</h2>
              <p className="section-tagline">
                Creativity Meets Purpose at IIT Ropar’s Annual Cultural Fest
              </p>
            </div>
          </ScrollReveal>

          {/* Large Stage Box */}
          <ScrollReveal direction="up" delay={100}>
            <div className="zeitgeist-stage-box">
              <div className="stage-header">
                <span className="stage-tag">IIT ROPAR CULTURAL FEST</span>
                <h3>Handmade Talents & Purpose</h3>
              </div>
              <p className="stage-desc">
                At Zeitgeist, the annual cultural fest of IIT Ropar, Pehchaan Ek Safar proudly set up a stall that reflected both creativity and purpose. The stall showcased handmade items prepared by our Paathshala children and volunteers, serving as a window into the talent and potential that education unlocks.
              </p>
            </div>
          </ScrollReveal>

          {/* Motive Spotlight */}
          <ScrollReveal direction="up" delay={150}>
            <div className="zeitgeist-motive-card">
              <div className="motive-badge-wrap">
                <FaHeart className="heart-icon" />
                <span>OUR MOTIVE</span>
              </div>
              <h3 className="motive-title">"Where Entertainment Met Empathy"</h3>
              <p className="motive-quote">
                Every conversation, every game, and every gift carried forward the message that <strong>education is a right, not a privilege</strong>. Through this effort, Pehchaan connected with the wider community, inspiring them to join hands in building brighter futures.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Horizontal Floating Milestone Rows */}
          <ScrollReveal direction="up" delay={200}>
            <div className="zeitgeist-rows">
              <div className="row-card">
                <span className="row-num">01</span>
                <div className="row-info">
                  <h4>Handmade Paathshala Creations</h4>
                  <p>Crafts, diyas, and art items prepared with love by Paathshala children and volunteers.</p>
                </div>
              </div>

              <div className="row-card">
                <span className="row-num">02</span>
                <div className="row-info">
                  <h4>Lively Hub of Interaction</h4>
                  <p>Games, conversations, and interactive stalls engaging college fest visitors and guests.</p>
                </div>
              </div>

              <div className="row-card">
                <span className="row-num">03</span>
                <div className="row-info">
                  <h4>Entertainment Meets Empathy</h4>
                  <p>Spreading awareness about child education rights through fun and engaging experiences.</p>
                </div>
              </div>

              <div className="row-card">
                <span className="row-num">04</span>
                <div className="row-info">
                  <h4>Wider Community Connection</h4>
                  <p>Connecting IIT Ropar students, faculty, & guests with the core mission of Pehchaan.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DYNAMIC BACKEND EVENTS (IF CREATED IN BACKEND) */}
      {events.length > 0 && (
        <section className="otherevents-list-section">
          <div className="otherevents-container">
            <h3 className="sub-section-title" style={{ textAlign: "center", marginBottom: "2rem" }}>
              More Event Updates
            </h3>
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

export default OtherEventsPage;