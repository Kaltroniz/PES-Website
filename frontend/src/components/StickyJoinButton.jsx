import React, { useState, useEffect } from "react";
import "../styles/componentsStyles/StickyJoinButton.css";
import { Link, useLocation } from "react-router-dom";

function StickyJoinButton() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // On homepage, only show after scrolling past the hero slider (500px)
      if (location.pathname === "/" || location.pathname === "/home") {
        if (window.scrollY > 450) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      } else {
        setVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div className="StickyJoinButton">
      <Link to="/joinus" className="StickyButtonText">
        <p>&#10022; Join Us</p>
      </Link>
    </div>
  );
}

export default StickyJoinButton;