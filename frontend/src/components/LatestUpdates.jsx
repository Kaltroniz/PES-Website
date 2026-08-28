import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import request from "../request";
import "../styles/componentsStyles/LatestUpdates.css";

const DEFAULT_UPDATES = [
  {
    tag: "FEATURED LAUNCH",
    title: "Mobile STEM Lab Launch",
    desc: "A custom-designed bus equipped with state-of-the-art learning modules, delivering hands-on experiments and scientific joy directly to rural communities and underserved schools.",
    badge: "New Initiative",
  },
  {
    tag: "MENTORSHIP",
    title: "School Safar Saathi",
    desc: "A transformative mentorship initiative dedicated to identifying, sponsoring, and supporting bright, deserving students from economically weaker backgrounds with academic & financial aid.",
    badge: "Flagship Program",
  },
  {
    tag: "CELEBRATION",
    title: "Vigyanotsav at IIT Ropar",
    desc: "A vibrant gathering hosted at IIT Ropar celebrating the scientific curiosity and innovations of over 25 school student teams from all across Punjab.",
    badge: "Annual Festival",
  },
];

const LatestUpdates = () => {
  const [updates, setUpdates] = useState(DEFAULT_UPDATES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fetch backend events for homepage
  useEffect(() => {
    async function fetchHomeEvents() {
      try {
        const res = await request.get(
          `${import.meta.env.VITE_API_BASE}/events/list?type=homepage`
        );
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const formatted = data.map((ev) => ({
              tag: ev.type ? ev.type.toUpperCase() : "EVENT UPDATE",
              title: ev.title,
              desc: ev.description,
              badge: ev.date
                ? new Date(ev.date).toLocaleDateString("en-IN", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recent Event",
              image: ev.images && ev.images.length > 0 ? ev.images[0] : null,
            }));
            setUpdates([...DEFAULT_UPDATES, ...formatted]);
          }
        }
      } catch (err) {
        console.error("Error fetching homepage events:", err);
      }
    }
    fetchHomeEvents();
  }, []);

  // Auto-slide carousel at fixed 4-second interval if > 3 items
  useEffect(() => {
    if (updates.length <= 3 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [updates.length, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + updates.length) % updates.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % updates.length);
  };

  // Get current 3 visible items on screen (circular wrapping)
  const getVisibleItems = () => {
    if (updates.length <= 3) return updates;
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(updates[(currentIndex + i) % updates.length]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section
      className="updates-section"
      id="latest-updates"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="updates-header">
        <span className="updates-kicker">WHAT'S NEW AT PES</span>
        <h2 className="updates-title">LATEST UPDATES</h2>
        <p className="updates-lead">
          Stay connected with our newest milestones, ground launches, and
          celebrations.
        </p>

        {updates.length > 3 && (
          <div className="updates-nav-controls">
            <button
              className="updates-nav-btn"
              onClick={handlePrev}
              title="Previous updates"
            >
              <FaChevronLeft />
            </button>
            <button
              className="updates-nav-btn"
              onClick={handleNext}
              title="Next updates"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      <div className="updates-grid">
        {visibleItems.map((item, index) => (
          <div key={index} className="update-card fade-in">
            {item.image && (
              <div className="update-card-img-wrap">
                <img src={item.image} alt={item.title} className="update-card-img" />
              </div>
            )}
            <div className="update-card-top">
              <span className="update-tag">{item.tag}</span>
              <span className="update-badge">{item.badge}</span>
            </div>
            <h3 className="update-card-title">{item.title}</h3>
            <p className="update-card-desc">{item.desc}</p>
            <div className="update-card-border-accent"></div>
          </div>
        ))}
      </div>

      {updates.length > 3 && (
        <div className="updates-dots">
          {updates.map((_, idx) => (
            <span
              key={idx}
              className={`updates-dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestUpdates;
