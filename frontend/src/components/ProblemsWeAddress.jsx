import React from "react";
import "../styles/componentsStyles/ProblemsWeAddress.css";
import ScrollReveal from "./ScrollReveal";

const problemsData = [
  {
    id: "01",
    tag: "GAP 01",
    title: "The Proximity of Deprivation",
    description:
      "Countless children live in the shadows of premier institutions, yet remain completely excluded from the light of basic education.",
  },
  {
    id: "02",
    tag: "GAP 02",
    title: "The Burden of Circumstance",
    description:
      "Families are often trapped by financial constraints and societal pressures, unaware of the lifelong benefits of learning.",
  },
  {
    id: "03",
    tag: "GAP 03",
    title: "The Void of Guidance",
    description:
      "Children are eager to learn but lack safe spaces, transportation, and the gentle mentorship required to stay in school.",
  },
  {
    id: "04",
    tag: "GAP 04",
    title: "The Absence of Scientific Inquiry",
    description:
      "Students from educationally deprived backgrounds often lack exposure to practical applications, hindering the development of a scientific temper and rational understanding.",
  },
];

const ProblemsWeAddress = () => {
  return (
    <section className="problems-section" id="problems-we-address">
      {/* Section Header */}
      <ScrollReveal direction="up">
        <div className="problems-header">
          <span className="problems-kicker">CHALLENGES & GAPS WE BRIDGE</span>
          <h2 className="problems-title">THE PROBLEMS WE ADDRESS</h2>
          <p className="problems-lead">
            Educational exclusion is a silent tragedy that leaves countless young
            minds unheard, particularly within the financially and socially weaker
            sections of society. We focus on bridging the gaps caused by:
          </p>
        </div>
      </ScrollReveal>

      {/* 2x2 Bento Matrix (Golden & Black Theme) */}
      <div className="p-bento-grid">
        {problemsData.map((item, index) => (
          <ScrollReveal
            key={item.id}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 100}
          >
            <div className="p-bento-card">
              <div className="p-bento-top">
                <span className="p-bento-tag">{item.tag}</span>
                <span className="p-bento-num">{item.id}</span>
              </div>
              <h3 className="p-bento-title">{item.title}</h3>
              <p className="p-bento-desc">{item.description}</p>
              <div className="p-bento-border-accent"></div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ProblemsWeAddress;
