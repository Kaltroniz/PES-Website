import React, { useState, useEffect } from "react";
import "../styles/componentsStyles/ThemeSwitcher.css";

const themes = [
  {
    id: "emerald",
    name: "1. Aurora Emerald",
    subtitle: "Life & Modern Nature",
    colors: ["#064e3b", "#10b981"]
  },
  {
    id: "violet",
    name: "2. Cosmic Indigo",
    subtitle: "Stripe & Silicon Valley",
    colors: ["#1e1b4b", "#6366f1"]
  },
  {
    id: "gold",
    name: "3. Imperial Gold",
    subtitle: "Royal & Sacred Prestige",
    colors: ["#1e293b", "#f59e0b"]
  },
  {
    id: "rose",
    name: "4. Crimson Rose",
    subtitle: "Compassion & Bold Care",
    colors: ["#1a0b2e", "#e11d48"]
  }
];

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("pes_theme") || "emerald";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("pes_theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className="pes-theme-bar">
      <div className="pes-theme-bar-inner">
        <div className="pes-theme-label">
          <span className="pes-theme-icon">✨</span>
          <strong>Live Theme Selector:</strong>
        </div>

        <div className="pes-theme-options">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`pes-theme-btn ${currentTheme === t.id ? "active" : ""}`}
              onClick={() => setCurrentTheme(t.id)}
            >
              <div className="pes-theme-dots">
                <span style={{ backgroundColor: t.colors[0] }}></span>
                <span style={{ backgroundColor: t.colors[1] }}></span>
              </div>
              <span className="pes-theme-btn-title">{t.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
