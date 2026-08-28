import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/componentsStyles/ConnectWithUs.css";
import ScrollReveal from "./ScrollReveal";

const ConnectWithUs = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText("9463737258@ybl");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="connect-section" id="connect-with-us">
      <ScrollReveal direction="up">
        <div className="connect-header">
          <span className="connect-kicker">JOIN OUR JOURNEY</span>
          <h2 className="connect-title">CONNECT WITH US</h2>
          <p className="connect-lead">
            Be a part of this journey. The smallest gesture of kindness can
            rewrite a child's story.
          </p>
        </div>
      </ScrollReveal>

      <div className="connect-grid">
        {/* Contact Info Card - Slide from Left */}
        <ScrollReveal direction="left">
          <div className="connect-card info-card">
            <span className="card-top-pill">REACH OUT</span>
            <h3 className="connect-card-title">Get In Touch</h3>
            <p className="connect-card-desc">
              Have questions, want to partner, or interested in volunteering? We’d
              love to hear from you.
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <span className="contact-label">EMAIL</span>
                <a href="mailto:pehchaanes@iitrpr.ac.in" className="contact-val">
                  pehchaanes@iitrpr.ac.in
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">PHONE</span>
                <a href="tel:+919463737258" className="contact-val">
                  +91-9463737258
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">LOCATION</span>
                <span className="contact-val">
                  Technology Business Incubator Foundation, IIT Ropar, Rupnagar-140001, Punjab, India
                </span>
              </div>
            </div>

            <Link to="/contact" className="connect-outline-btn">
              Send Us a Message &rarr;
            </Link>
          </div>
        </ScrollReveal>

        {/* Support Our Cause (UPI / Bank Info) - Slide from Right */}
        <ScrollReveal direction="right" delay={150}>
          <div className="connect-card support-card">
            <span className="card-top-pill gold-pill">SUPPORT OUR CAUSE</span>
            <h3 className="connect-card-title gold-title">Direct Contribution</h3>
            <p className="connect-card-desc light-desc">
              Your generous contributions directly support daily tuitions, nutritious
              snacks, books, school admissions, and safe travel for our children.
            </p>

            <div className="support-box">
              <div className="upi-box">
                <span className="support-field-label">OFFICIAL UPI ID</span>
                <div className="upi-row">
                  <span className="upi-text">9463737258@ybl</span>
                  <button className="copy-btn" onClick={handleCopyUPI}>
                    {copied ? "Copied!" : "Copy UPI"}
                  </button>
                </div>
              </div>

              <div className="bank-box">
                <span className="support-field-label">BANK ACCOUNT DETAILS</span>
                <div className="bank-details">
                  <p><strong>A/C No:</strong> 38276019119</p>
                  <p><strong>Bank:</strong> State Bank of India (SBI), IIT Ropar</p>
                </div>
              </div>
            </div>

            <Link to="/donate" className="connect-gold-btn">
              Proceed to Donate Page &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConnectWithUs;
