import React, { useEffect, useState } from "react";
import "../styles/componentsStyles/HeroSection.css";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import iitRoparLogo from "../assets/iit_ropar_logo_gold_crisp.png";

const SANSKRIT_KICKER = "॥ शान्तिदेवकृत बोधिचर्यावतार ॥";
const SANSKRIT_LINE_1 = "अनाथानामहं नाथः सार्थवाहश्च यायिनाम् ।";
const SANSKRIT_LINE_2 = "पारेप्सूनां नौः सेतुः संक्रम एव च ॥";

const ENGLISH_LINES = [
  '"May I be a protector for those without protection,',
  "A caravan leader for travellers.",
  "For those who long to reach the farther shore,",
  'May I be a boat, a bridge, and a crossing."',
];
const AUTHOR_TAG = "— Shantideva (Bodhicaryāvatāra, 3.17)";

function TypewriterQuote() {
  const [kickerText, setKickerText] = useState("");
  const [sanskrit1, setSanskrit1] = useState("");
  const [sanskrit2, setSanskrit2] = useState("");
  const [engLines, setEngLines] = useState(["", "", "", ""]);
  const [authorText, setAuthorText] = useState("");
  const [activeStep, setActiveStep] = useState("kicker"); // kicker, sans1, sans2, eng0, eng1, eng2, eng3, author, done

  useEffect(() => {
    let timer;

    // 1. Type Kicker
    if (activeStep === "kicker") {
      if (kickerText.length < SANSKRIT_KICKER.length) {
        timer = setTimeout(() => {
          setKickerText(SANSKRIT_KICKER.slice(0, kickerText.length + 1));
        }, 30);
      } else {
        timer = setTimeout(() => setActiveStep("sans1"), 150);
      }
    }
    // 2. Type Sanskrit Line 1
    else if (activeStep === "sans1") {
      if (sanskrit1.length < SANSKRIT_LINE_1.length) {
        timer = setTimeout(() => {
          setSanskrit1(SANSKRIT_LINE_1.slice(0, sanskrit1.length + 1));
        }, 35);
      } else {
        timer = setTimeout(() => setActiveStep("sans2"), 150);
      }
    }
    // 3. Type Sanskrit Line 2
    else if (activeStep === "sans2") {
      if (sanskrit2.length < SANSKRIT_LINE_2.length) {
        timer = setTimeout(() => {
          setSanskrit2(SANSKRIT_LINE_2.slice(0, sanskrit2.length + 1));
        }, 35);
      } else {
        timer = setTimeout(() => setActiveStep("eng0"), 200);
      }
    }
    // 4. Type English Line 0
    else if (activeStep === "eng0") {
      const target = ENGLISH_LINES[0];
      if (engLines[0].length < target.length) {
        timer = setTimeout(() => {
          setEngLines((prev) => [
            target.slice(0, prev[0].length + 1),
            prev[1],
            prev[2],
            prev[3],
          ]);
        }, 22);
      } else {
        timer = setTimeout(() => setActiveStep("eng1"), 100);
      }
    }
    // 5. Type English Line 1
    else if (activeStep === "eng1") {
      const target = ENGLISH_LINES[1];
      if (engLines[1].length < target.length) {
        timer = setTimeout(() => {
          setEngLines((prev) => [
            prev[0],
            target.slice(0, prev[1].length + 1),
            prev[2],
            prev[3],
          ]);
        }, 22);
      } else {
        timer = setTimeout(() => setActiveStep("eng2"), 100);
      }
    }
    // 6. Type English Line 2
    else if (activeStep === "eng2") {
      const target = ENGLISH_LINES[2];
      if (engLines[2].length < target.length) {
        timer = setTimeout(() => {
          setEngLines((prev) => [
            prev[0],
            prev[1],
            target.slice(0, prev[2].length + 1),
            prev[3],
          ]);
        }, 22);
      } else {
        timer = setTimeout(() => setActiveStep("eng3"), 100);
      }
    }
    // 7. Type English Line 3
    else if (activeStep === "eng3") {
      const target = ENGLISH_LINES[3];
      if (engLines[3].length < target.length) {
        timer = setTimeout(() => {
          setEngLines((prev) => [
            prev[0],
            prev[1],
            prev[2],
            target.slice(0, prev[3].length + 1),
          ]);
        }, 22);
      } else {
        timer = setTimeout(() => setActiveStep("author"), 120);
      }
    }
    // 8. Type Author Tag
    else if (activeStep === "author") {
      if (authorText.length < AUTHOR_TAG.length) {
        timer = setTimeout(() => {
          setAuthorText(AUTHOR_TAG.slice(0, authorText.length + 1));
        }, 25);
      } else {
        setActiveStep("done");
      }
    }

    return () => clearTimeout(timer);
  }, [
    activeStep,
    kickerText,
    sanskrit1,
    sanskrit2,
    engLines,
    authorText,
  ]);

  return (
    <div className="hero-section hero-quote-slide">
      {/* Top-Left: Sanskrit Shloka in Golden Font with Typewriter */}
      <div className="quote-top-corner">
        <div className="sanskrit-container typewriter-active">
          <span className="shloka-kicker">
            {kickerText}
            {activeStep === "kicker" && <span className="typewriter-caret" />}
          </span>
          <p className="sanskrit-text">
            {sanskrit1}
            {activeStep === "sans1" && <span className="typewriter-caret" />}
          </p>
          <p className="sanskrit-text">
            {sanskrit2}
            {activeStep === "sans2" && <span className="typewriter-caret" />}
          </p>
        </div>
      </div>

      {/* Center: Clean Transparent Golden IIT Ropar Emblem */}
      <div className="quote-center-insignia">
        <img
          src={iitRoparLogo}
          alt="Indian Institute of Technology Ropar"
          className="quote-iit-logo"
          style={{ width: "135px", height: "135px", maxWidth: "135px", maxHeight: "135px", objectFit: "contain" }}
        />
      </div>

      {/* Bottom-Right: English Translation in Golden Font with Typewriter */}
      <div className="quote-bottom-corner">
        <div className="english-quote-container typewriter-active">
          {engLines[0] && (
            <p className="english-quote-line">
              {engLines[0]}
              {activeStep === "eng0" && <span className="typewriter-caret" />}
            </p>
          )}
          {engLines[1] && (
            <p className="english-quote-line">
              {engLines[1]}
              {activeStep === "eng1" && <span className="typewriter-caret" />}
            </p>
          )}
          {engLines[2] && (
            <p className="english-quote-line">
              {engLines[2]}
              {activeStep === "eng2" && <span className="typewriter-caret" />}
            </p>
          )}
          {engLines[3] && (
            <p className="english-quote-line">
              {engLines[3]}
              {activeStep === "eng3" && <span className="typewriter-caret" />}
            </p>
          )}
          {authorText && (
            <span className="quote-author-tag">
              {authorText}
              {(activeStep === "author" || activeStep === "done") && (
                <span className="typewriter-caret" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function HeroSection(props) {
  if (props.isQuoteSlide) {
    return <TypewriterQuote />;
  }

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      {/* Top Section (Sky / Upper Area) */}
      <div className="hero-top-area">
        <h2 className="hero-top-heading">{props.heading}</h2>
      </div>

      {/* Bottom Section (Lower Area, below faces) */}
      <div className="hero-bottom-area">
        <p className="hero-subheading">{props.subheading}</p>
        <p className="hero-para">{props.description}</p>
        <div className="hero-btns">
          <RouterLink className="hero-donate-btn" to="/donate">
            Donate Now
          </RouterLink>
          <ScrollLink
            className="hero-rdm-btn"
            to="about-us"
            smooth={true}
            duration={1000}
          >
            Read More
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
