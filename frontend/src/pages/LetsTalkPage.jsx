import React, { useState, useEffect } from "react";
import "../styles/pagesStyles/LetsTalkPage.css";
import Events from "../components/Events";
import ScrollReveal from "../components/ScrollReveal";
import JoinJourneyCTA from "../components/JoinJourneyCTA";
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import request from "../request.js";

// Icons
import {
  FaCoffee,
  FaComments,
  FaBookOpen,
  FaHeart,
  FaLightbulb,
  FaFeatherAlt,
  FaGlobe,
  FaQuestionCircle,
  FaUserFriends,
} from "react-icons/fa";

function LetsTalkPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    request
      .get(`${import.meta.env.VITE_API_BASE}/events/list?type=letstalk`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data);
        }
        console.log("Let's Talk events fetched successfully");
      })
      .catch((err) => console.log("Error fetching Let's Talk events:", err))
      .finally(() => setLoading(false));
  }, []);

  const conversationTopics = [
    { icon: <FaFeatherAlt />, title: "Beauty & Aesthetics", desc: "Finding grace in art, nature, and everyday ordinary moments." },
    { icon: <FaBookOpen />, title: "Books & Philosophy", desc: "Ideas from literature and quiet thoughts that stay with us." },
    { icon: <FaHeart />, title: "Relationships & Connections", desc: "Understanding human bonds, empathy, and meaningful ties." },
    { icon: <FaGlobe />, title: "Memories & Nostalgia", desc: "Reflecting on where we came from and childhood stories." },
    { icon: <FaLightbulb />, title: "Dreams & Aspirations", desc: "Exploring unsaid hopes, creative passions, and future paths." },
    { icon: <FaUserFriends />, title: "Failures & Growth", desc: "Embracing setbacks as honest steps in discovering life." },
  ];

  return (
    <div className="letstalk-page">
      {/* 1. DEEP ROYAL NIGHT HERO SECTION WITH FLOATING THOUGHT BUBBLES */}
      <section className="letstalk-hero">
        <div className="letstalk-hero-ambient-glow"></div>

        {/* Floating Animated Thought Bubbles */}
        <div className="thought-bubbles">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
          <div className="bubble bubble-6"></div>
        </div>

        <div className="letstalk-hero-container">
          <ScrollReveal direction="up">
            <h1 className="letstalk-hero-title">Let’s Talk</h1>

            <p className="letstalk-hero-subtitle">
              A space to pause. A space to listen. A space to be.
            </p>
          </ScrollReveal>
        </div>

        <div className="letstalk-hero-bottom-curve"></div>
      </section>

      {/* 2. PHILOSOPHY & NARRATIVE SECTION */}
      <section className="letstalk-narrative-section">
        <div className="letstalk-container">
          <ScrollReveal direction="up">
            <div className="narrative-quote-box">
              <p className="quote-text">
                "No lectures. No right answers. Just conversations, stories, and different ways of seeing the world."
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="narrative-grid">
              <div className="narrative-card">
                <div className="card-badge"><FaCoffee /> Over a Cup of Chai</div>
                <p>
                  Let's Talk is a small initiative where we get together over chai and talk about things that are simple enough for everyone to relate to, but deep enough to make us think.
                </p>
                <p>
                  There are no speakers or experts here, and there are no right answers. We simply start with one question, share our experiences and perspectives, and see where the conversation takes us.
                </p>
              </div>

              <div className="narrative-card">
                <div className="card-badge"><FaComments /> Beyond the Syllabus</div>
                <p>
                  It is an open conversation space where students and scholars come together to talk about things that usually don't make it into a syllabus — beauty, books, relationships, memories, dreams, failures, perspectives, and life itself.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. WHAT HAPPENS FEATURE CARDS */}
          <ScrollReveal direction="up" delay={150}>
            <div className="what-happens-block">
              <h3 className="section-heading-gold">What Happens at Let's Talk:</h3>
              <div className="what-happens-three-cards">
                <div className="what-card">
                  <div className="what-icon"><FaComments /></div>
                  <h4>Open-Ended Conversations</h4>
                  <p>Unscripted discussions where every voice is heard and every perspective adds depth.</p>
                </div>

                <div className="what-card">
                  <div className="what-icon"><FaBookOpen /></div>
                  <h4>Personal Stories & Experiences</h4>
                  <p>Real-life anecdotes, shared vulnerabilities, and authentic human connections.</p>
                </div>

                <div className="what-card">
                  <div className="what-icon"><FaQuestionCircle /></div>
                  <h4>Thought-Provoking Questions</h4>
                  <p>Starting with one gentle question that opens doors to meaningful reflection.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 4. CONVERSATION TOPICS EXPLORED */}
          <ScrollReveal direction="up" delay={200}>
            <div className="topics-block">
              <h3 className="section-heading-gold">Things We Talk About:</h3>
              <div className="topics-grid">
                {conversationTopics.map((topic, index) => (
                  <div key={index} className="topic-card">
                    <div className="topic-icon">{topic.icon}</div>
                    <div className="topic-content">
                      <h4>{topic.title}</h4>
                      <p>{topic.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DYNAMIC BACKEND EVENTS (IF CREATED IN BACKEND) */}
      {events.length > 0 && (
        <section className="letstalk-events-section">
          <div className="letstalk-container">
            <h3 className="section-heading-gold" style={{ textAlign: "center", marginBottom: "2rem" }}>
              Recent Let's Talk Sessions
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

export default LetsTalkPage;
