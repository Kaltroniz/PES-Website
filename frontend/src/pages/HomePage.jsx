import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../styles/pagesStyles/HomePage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Importing modular homepage components */
import HeroSection from "../components/HeroSection";
import VisionMission from "../components/VisionMission";
import ProblemsWeAddress from "../components/ProblemsWeAddress";
import WhatWeDoSection from "../components/WhatWeDoSection";
import OurImpact from "../components/OurImpact";
import MeetTeamHome from "../components/MeetTeamHome";
import LatestUpdates from "../components/LatestUpdates";
import ConnectWithUs from "../components/ConnectWithUs";
import Testimonial2 from "../components/Testimonial2";
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";

/* Images for Who We Are */
import about_1 from "../assets/about-1.jpg";
import about_2 from "../assets/about-2.jpg";
import about_3 from "../assets/about-3.jpg";

/* Images for Hero section */
import Hero_1 from "../assets/home_hero_director.png";
import Hero_2 from "../assets/home_hero_paathshala.png";
import Hero_3 from "../assets/home_hero_outreach.jpg";
import Hero_4 from "../assets/home_hero_atl.jpg";
import Hero_5 from "../assets/home_hero_sss.jpg";

/* Images for testimonial */
import testimonial_1 from "../assets/testimonial-1.jpg";
import testimonial_2 from "../assets/testimonial-2.jpg";
import testimonial_3 from "../assets/governingbody/Brajesh.jpeg";
import testimonial_4 from "../assets/governingbody/Vipul.jpeg";
import testimonial_5 from "../assets/patronAndMentor/harpreet_sir.jpg";

// Data for Hero section
const heroData = [
  {
    isQuoteSlide: true,
    heading: "Shantideva Quote",
  },
  {
    img: Hero_1,
    heading: "Education",
    subheading: "for underprivileged",
    description:
      "Shaping Identities, Redefining Education: Pehchaan empowers young minds, nurturing their potential to build a brighter tomorrow. We strive to redefine education, fostering personal growth and creating a positive impact on the identities of the individuals we serve.",
  },
  {
    img: Hero_2,
    heading: "Education",
    subheading: "for underprivileged",
    description:
      "Paathshala provides daily tuition classes for economically challenged children. We also support their admission into esteemed institutions such as KV, JNV and Navodaya, ensuring access to quality education. Our mission is to empower every child and break barriers for a brighter future.",
  },
  {
    img: Hero_3,
    heading: "Mentorship",
    subheading: "Sparking Curiosity",
    description:
      "Outreach: Fostering scientific temper and financial literacy in Ropar's students through career counseling sessions, seminars, and workshops. We engage with both private and government schools, empowering students for a knowledge-rich and financially informed future.",
  },
  {
    img: Hero_4,
    heading: "Raising",
    subheading: "The Bar",
    description:
      "Atal Tinkering Labs: Extending beyond classrooms, we empower through ATLs, training teachers and fostering innovation. Our commitment is to cultivate a culture of creativity, preparing students for a dynamic future.",
  },
  {
    img: Hero_5,
    heading: "School Safar",
    subheading: "Saathi (SSS)",
    description:
      "Empowering meritorious students in financial adversity through resources and mentorship. We conduct fair tests and interviews to ensure a transparent selection process, nurturing their academic journey and future success.",
  },
];

// Data for Testimonials
const testimonialData = [
  {
    name: "Prof. Harpreet Singh",
    description:
      "(Mentor) As a mentor of Pehchaan Ek Safar, I feel privileged to witness volunteers dedicating time and resources to educate underprivileged children alongside their studies. It's heartening to see them not only teach but also incorporate modern experiential learning methods. Education is key for financial sustainability and fostering good citizenship. Live Long, Pehchaan Ek Safar!",
    img: testimonial_5,
  },
  {
    name: "Sanyukta Marandi",
    description:
      "(Volunteer) Everyday we get to learn from the kids as much as they learn from us. Also, we not only help the children with their education, but also try to guide them in any way possible. The team, the children, the mentors and guides, we are all a family now. In this journey of spreading love and education we have come a long way, and we've still got a long journey to cover.",
    img: testimonial_1,
  },
  {
    name: "Versha Chaudhary",
    description:
      "(Founding Member) Pehchaan Ek Safar is an effort to help and uplift the needy, which eventually contributes to Nation building. Every time I visited those kids I used to receive their warm smiles and inner peace as a regular reward. That amazing experience of those incredible smiles and self-satisfaction beats in my heart even today.",
    img: testimonial_2,
  },
  {
    name: "Mahantesh Khetri",
    description:
      "(Founding Member) Proud to be a founding member of Pehchaan Ek Safar, an NGO focusing on educating underprivileged children. Our journey began with a few volunteers near IIT Ropar, and now we've expanded to support hundreds of kids, registering them in formal schooling with dedicated volunteers providing crucial assistance.",
    img: testimonial_3,
  },
  {
    name: "Atul Singh",
    description:
      "(Founding Member) In late 2017, as founding members wandering IIT Ropar, we discovered local children deprived of education. With support from fellow students and the institute, we formed PEHCHAAN EK SAFAR, an NGO aiming to bridge the gap between privileged and underprivileged.",
    img: testimonial_4,
  },
];

import ScrollReveal from "../components/ScrollReveal";

function HomePage() {
  const settingsTestimonial = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const settingsHero = {
    customPaging: function (i) {
      return <div className="dot">{i + 1}</div>;
    },
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/faq") {
      const faqSection = document.getElementById("faq-section");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/aboutus") {
      const abtSection = document.getElementById("about-us");
      if (abtSection) {
        abtSection.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
      }
    }
  }, [location]);

  return (
    <>
      {/* 0. HERO SECTION (With Sanskrit Shantideva Quote Slide) */}
      <section className="hero">
        <Slider {...settingsHero}>
          {heroData.map((item, index) => (
            <div key={index}>
              <HeroSection {...item} />
            </div>
          ))}
        </Slider>
      </section>

      {/* 1. WHO WE ARE */}
      <section className="AboutUs" id="about-us">
        <ScrollReveal direction="up">
          <div className="who-we-are-header">
            <span className="who-we-are-kicker">OUR IDENTITY & ESSENCE</span>
            <h1 className="who-we-are-title">WHO WE ARE</h1>
          </div>
        </ScrollReveal>

        <div className="AboutUs-content">
          {/* Story Text - Slide from Left */}
          <ScrollReveal direction="left" className="AboutUs-story-wrapper">
            <div className="AboutUs-story">
              <p className="who-we-are-main-para">
                <strong>Pehchaan Ek Safar (PES)</strong> is a journey of shared humanity, born from a simple, quiet belief: <em>every child deserves to be seen, heard, and nurtured.</em>
              </p>
              <p className="who-we-are-sub-para">
                Registered as a non-profit organization in 2019, we are a family of students and faculty advisors of <strong>IIT Ropar</strong> dedicated to walking alongside the weaker sections of our society. We step into marginalized neighbourhoods to hold hands with families, ensuring that education, warmth, and care reach the doors of those who need it most, without any discrimination based on caste, creed, sex, or religion.
              </p>
            </div>
          </ScrollReveal>

          {/* Image Collage - Slide from Right */}
          <ScrollReveal direction="right" delay={150} className="about-images-wrapper-container">
            <div className="about-images-wrapper">
              <div className="about-img-left">
                <img src={about_1} alt="PES Classroom" />
              </div>
              <div className="about-img-right">
                <img src={about_2} alt="PES Mentorship" />
                <img src={about_3} alt="PES Activities" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. OUR VISION & MISSION */}
      <VisionMission />

      {/* 3. THE PROBLEMS WE ADDRESS */}
      <ProblemsWeAddress />

      {/* 4. WHAT WE DO */}
      <WhatWeDoSection />

      {/* 5. OUR IMPACT */}
      <OurImpact />

      {/* 6. MEET THE TEAM */}
      <MeetTeamHome />

      {/* 7. LATEST UPDATES */}
      <LatestUpdates />

      {/* 8. CONNECT WITH US */}
      <ConnectWithUs />

      {/* 9. TESTIMONIALS */}
      <ScrollReveal direction="left">
        <section className="testimonials-home-section" id="testimonials">
          <div className="testimonials-home-header">
            <span className="testimonials-kicker">VOICES OF PURPOSE</span>
            <h2 className="testimonials-title">TESTIMONIALS</h2>
          </div>
          <div className="testimonial-carousel">
            <Slider {...settingsTestimonial} className="Testimonial-cards">
              {testimonialData.map((item, index) => (
                <div key={index}>
                  <Testimonial2 {...item} />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </ScrollReveal>

      {/* 10. FAQ SECTION */}
      <section className="FAQ" id="faq-section">
        <ScrollReveal direction="up">
          <span className="faq-kicker">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="faq-title">FAQ</h2>
        </ScrollReveal>
        <div className="FAQ-container">
          <ScrollReveal direction="left">
            <div className="FAQitem">
              <h3>1. What is Pehchaan Ek Safar?</h3>
              <p>
                Pehchaan Ek Safar is a registered non-profit organization by the students and faculty advisors of IIT Ropar dedicated to providing education and holistic upliftment to underprivileged children. We believe education is a fundamental right that can uplift entire communities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="FAQitem">
              <h3>2. How does Pehchaan Ek Safar help underprivileged children?</h3>
              <p>
                We provide free evening tuition classes, cover stationery and book expenses, sponsor formal school admissions into reputed schools (such as Navodaya, KV, and JNV), provide safe transportation, and conduct interactive STEM outreach workshops and career counselling sessions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={150}>
            <div className="FAQitem">
              <h3>3. Who are the children you support?</h3>
              <p>
                We support children from marginalized neighbourhoods and economically weaker sections around Ropar and Punjab who lack access to quality educational resources and guidance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="FAQitem">
              <h3>4. How can I contribute or volunteer with PES?</h3>
              <p>
                You can contribute directly via our official UPI ID (9463737258@ybl), donate educational materials, or register as a student/community volunteer through our Join Us page. Every gesture of kindness creates real change.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky Floating CTA Buttons */}
      <StickyJoinButton />
      <StickyDonateButton />
    </>
  );
}

export default HomePage;
