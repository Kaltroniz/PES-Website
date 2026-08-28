import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pagesStyles/OutreachEventsPage.css";
import Hero from "../components/Hero";
import Events from "../components/Events";
import ScrollReveal from "../components/ScrollReveal";
import request from "../request.js";

// Assets
import outreachHero from "../assets/home_hero_outreach.jpg";
import heroImg4 from "../assets/hero_image4.jpg";
import atlHero from "../assets/home_hero_atl.jpg";

function OutreachEventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="outreach-events-page">
      <Hero
        heroSliderImages={[outreachHero, atlHero, heroImg4]}
        heroHeading="Vigyanotsav"
        heroParagraph="Hands-on science demonstrations, school workshops, STEM labs on wheels, and career counseling sessions."
      />

      <section className="outreach-events-intro">
        <div className="outreach-events-container">
          <ScrollReveal direction="up">
            <div className="intro-badge">EXPERIENTIAL LEARNING & ACTIVITIES</div>
            <h2 className="intro-heading">Vigyanotsav Initiatives & Event Highlights</h2>
            <p className="intro-text">
              Our Outreach events connect IIT Ropar volunteers with students and educators in government schools and colleges. 
              Explore our workshops, science festivals, health awareness drives, and interactive sessions below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="outreach-events-list-section">
        <div className="outreach-events-container">
          {events.length > 0 ? (
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
          ) : (
            !loading && (
              <ScrollReveal direction="up">
                <div className="outreach-events-empty-state">
                  <div className="empty-icon-wrap">🚀</div>
                  <h3>Outreach Events Content Space</h3>
                  <p>
                    Upcoming outreach schedules, workshop galleries, and event highlights will be published here.
                  </p>
                  <Link to="/outreach" className="empty-state-btn">
                    Explore Outreach Project &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            )
          )}

          {loading && (
            <div className="outreach-events-loading">
              <div className="loading-spinner"></div>
              <p>Loading outreach events...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default OutreachEventsPage;
