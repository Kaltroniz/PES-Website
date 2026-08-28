import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pagesStyles/VigyanotsavPage.css";
import Hero from "../components/Hero";
import Events from "../components/Events";
import ScrollReveal from "../components/ScrollReveal";
import JoinJourneyCTA from "../components/JoinJourneyCTA";
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import request from "../request.js";

// Icons
import {
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaFilePdf,
} from "react-icons/fa";

// Image Assets for Demonstration (Top 4 for Hero, 10 for 3D Stack)
import atlHero from "../assets/home_hero_atl.jpg";
import outreachHero from "../assets/home_hero_outreach.jpg";
import heroImg1 from "../assets/hero_image1.jpg";
import heroImg2 from "../assets/hero_image2.jpg";
import heroImg3 from "../assets/hero_image3.jpg";
import heroImg4 from "../assets/hero_image4.jpg";
import outreachWork1 from "../assets/home-page-our-work-outreach.jpg";
import outreachWork2 from "../assets/home-page-our-work-outreach-2.jpg";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import about3 from "../assets/about-3.jpg";
import paathshalaAct1 from "../assets/paathshala_activity_1.png";
import paathshalaAct3 from "../assets/paathshala_activity_3.jpg";
import paathshalaAct4 from "../assets/paathshala_activity_4.png";

// Real Vigyanotsav 2.0 Slider Photos
import vigyanSlider1 from "../assets/outreach/vigyanotsav_slider_1.jpg";
import vigyanSlider2 from "../assets/outreach/vigyanotsav_slider_2.png";
import vigyanSlider3 from "../assets/outreach/vigyanotsav_slider_3.jpg";
import vigyanSlider4 from "../assets/outreach/vigyanotsav_slider_4.png";
import vigyanSlider5 from "../assets/outreach/vigyanotsav_slider_5.png";

// Real Vigyanotsav 2.0 Gallery Photos
import vigyanGallery1 from "../assets/outreach/vigyanotsav_gallery_1.png";
import vigyanGallery2 from "../assets/outreach/vigyanotsav_gallery_2.png";
import vigyanGallery3 from "../assets/outreach/vigyanotsav_gallery_3.png";
import vigyanGallery4 from "../assets/outreach/vigyanotsav_gallery_4.jpg";
import vigyanGallery5 from "../assets/outreach/vigyanotsav_gallery_5.jpg";

// Top 5 Photos for Hero Banner
const topHeroPhotos = [
  vigyanSlider1,
  vigyanSlider2,
  vigyanSlider3,
  vigyanSlider4,
  vigyanSlider5,
];

// All 10 Real Photos for 3D Perspective Card Stack
const gallery10Photos = [
  { img: vigyanSlider1 },
  { img: vigyanSlider2 },
  { img: vigyanSlider3 },
  { img: vigyanSlider4 },
  { img: vigyanSlider5 },
  { img: vigyanGallery1 },
  { img: vigyanGallery2 },
  { img: vigyanGallery3 },
  { img: vigyanGallery4 },
  { img: vigyanGallery5 },
];

function VigyanotsavPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active3DIndex, setActive3DIndex] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    request
      .get(`${import.meta.env.VITE_API_BASE}/events/list?type=vigyanotsav`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data);
        }
        console.log("Vigyanotsav events fetched successfully");
      })
      .catch((err) => console.log("Error fetching Vigyanotsav events:", err))
      .finally(() => setLoading(false));
  }, []);

  // Automatic background crossfade timer for Top 4 Hero Photos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % topHeroPhotos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext3D = () => {
    setActive3DIndex((prev) => (prev + 1) % gallery10Photos.length);
  };

  const handlePrev3D = () => {
    setActive3DIndex((prev) =>
      prev === 0 ? gallery10Photos.length - 1 : prev - 1
    );
  };

  return (
    <div className="vigyanotsav-page">
      {/* 1. TOP 4 PHOTOS HERO SLIDESHOW BANNER WITH ULTRA-SMOOTH CROSSFADE */}
      <section className="vigyan-hero">
        <div className="vigyan-hero-slides">
          {topHeroPhotos.map((imgSrc, index) => (
            <div
              key={index}
              className={`vigyan-hero-slide ${
                index === currentHeroSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${imgSrc})` }}
            />
          ))}
        </div>

        <div className="vigyan-hero-overlay"></div>

        <div className="vigyan-hero-container">
          <ScrollReveal direction="up">
            <h1 className="vigyan-hero-title">Vigyanotsav</h1>
            <p className="vigyan-hero-subtitle">
              Where curiosity meets creativity.
            </p>
          </ScrollReveal>
        </div>

        {/* Hero Slider Dots */}
        <div className="vigyan-hero-dots">
          {topHeroPhotos.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === currentHeroSlide ? "active" : ""}`}
              onClick={() => setCurrentHeroSlide(idx)}
              aria-label={`Go to hero slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. IMPACT STATS BAR */}
      <section className="vigyan-stats-bar">
        <div className="vigyan-stats-container">
          <div className="vigyan-stat-box">
            <div className="vigyan-stat-number">25+</div>
            <div className="vigyan-stat-label">Schools Participated</div>
          </div>
          <div className="vigyan-stat-divider"></div>
          <div className="vigyan-stat-box">
            <div className="vigyan-stat-number">180+</div>
            <div className="vigyan-stat-label">Students Participated</div>
          </div>
          <div className="vigyan-stat-divider"></div>
          <div className="vigyan-stat-box">
            <div className="vigyan-stat-number">30+</div>
            <div className="vigyan-stat-label">Teachers & Staff Participated</div>
          </div>
        </div>
      </section>

      {/* 3. EVENT DETAILS CONTENT FROM EVENT.MD */}
      <section className="vigyanotsav-content-section">
        <div className="vigyanotsav-container">
          <ScrollReveal direction="up">
            <h2 className="content-heading">Vigyanotsav</h2>
            <p className="content-tagline">Where curiosity meets creativity.</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="content-text-block">
              <p>
                Vigyanotsav is Pehchaan Ek Safar’s science exhibition as part of science and environment outreach that gives school students a platform to build, experiment, and showcase their ideas. Students explore themes ranging from Information & Communication Technology, Life Sciences, Sustainable Energy, and Physical & Mathematical Sciences, to areas like Robotics & Mechanical Design, Smart Infrastructure & Environment, Electronics & Circuits, Computer Science & AI, Biomedical Innovations, and Agricultural Technology turning classroom concepts into working models and creative solutions.
              </p>
              <p>
                The experience goes beyond the exhibition. Science stalls, interactive games, research exhibits, and scientific talks bring students face-to-face with the world of science and the researchers at IIT Ropar.{" "}
                <a
                  href="/vigyanotsav_2.0_brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-inline-link"
                >
                  Read More...
                </a>
              </p>
            </div>
          </ScrollReveal>

          {/* What Happens Section */}
          <ScrollReveal direction="up" delay={150}>
            <div className="what-happens-card">
              <h3 className="what-happens-title">What happens:</h3>
              <ul className="what-happens-list">
                <li>Working science models</li>
                <li>Student demonstrations</li>
                <li>Interaction with IIT Ropar experts</li>
                <li>Science-based activities and experiments</li>
                <li>Exposure to different fields of science</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Closing Highlight */}
          <ScrollReveal direction="up" delay={200}>
            <div className="closing-highlight-box">
              <p>
                More than a competition, Vigyanotsav is a celebration of curiosity, creativity, collaboration, and the joy of discovering how things work.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. OPTION 3: INTERACTIVE 3D PERSPECTIVE CARD STACK GALLERY */}
      <section className="vigyanotsav-3d-gallery-section">
        <div className="vigyanotsav-container">
          <ScrollReveal direction="up">
            <div className="gallery-header-center">
              <span className="gallery-kicker">
                <FaImages style={{ marginRight: "6px" }} /> VIGYANOTSAV GALLERY
              </span>
              <h2 className="gallery-heading">Vigyanotsav Highlights & Glimpses</h2>
              <p className="gallery-subtext">
                Click any photo or use the navigation arrows to rotate through the exhibition moments.
              </p>
            </div>
          </ScrollReveal>

          {/* 3D Coverflow Container */}
          <div className="gallery-3d-wrapper">
            <button
              className="gallery-3d-nav-btn gallery-3d-prev"
              onClick={handlePrev3D}
              aria-label="Previous Photo"
            >
              <FaChevronLeft />
            </button>

            <div className="gallery-3d-stage">
              {gallery10Photos.map((item, index) => {
                let offset = index - active3DIndex;
                const total = gallery10Photos.length;

                // Handle circular wrapping for smooth rotation
                if (offset < -Math.floor(total / 2)) offset += total;
                if (offset > Math.floor(total / 2)) offset -= total;

                let absOffset = Math.abs(offset);
                let isVisible = absOffset <= 2;

                let cardClass = "gallery-3d-card";
                if (offset === 0) cardClass += " active-center";
                else if (offset === -1) cardClass += " left-1";
                else if (offset === 1) cardClass += " right-1";
                else if (offset === -2) cardClass += " left-2";
                else if (offset === 2) cardClass += " right-2";
                else cardClass += " hidden-card";

                return (
                  <div
                    key={index}
                    className={cardClass}
                    onClick={() => isVisible && setActive3DIndex(index)}
                  >
                    <div className="card-img-wrap">
                      <img src={item.img} alt={`Vigyanotsav Moment ${index + 1}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className="gallery-3d-nav-btn gallery-3d-next"
              onClick={handleNext3D}
              aria-label="Next Photo"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Clean Dots Navigation Control */}
          <div className="gallery-3d-dots">
            {gallery10Photos.map((_, idx) => (
              <button
                key={idx}
                className={`gallery-dot ${idx === active3DIndex ? "active" : ""}`}
                onClick={() => setActive3DIndex(idx)}
                aria-label={`Go to photo ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. DYNAMIC BACKEND EVENTS (ONLY IF CREATED IN BACKEND) */}
      {events.length > 0 && (
        <section className="vigyanotsav-events-list-section">
          <div className="vigyanotsav-container">
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

      {/* Sticky Floating CTA Buttons */}
      <StickyJoinButton />
      <StickyDonateButton />
    </div>
  );
}

export default VigyanotsavPage;
