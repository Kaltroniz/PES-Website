import React from "react";
import "../styles/componentsStyles/Testimonial2.css";

function Testimonial2(props) {
  const handleImageError = (e) => {
    e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(props.name || "User") + "&background=d97706&color=fff";
  };

  return (
    <div className="testimonial2">
      <div className="testimonial2-img-container">
        <img
          src={props.img}
          alt={props.name}
          className="testimonial2-img"
          onError={handleImageError}
        />
      </div>
      <div className="testimonial2-content">
        <p className="testimonial2-p">"{props.description}"</p>
        <h2 className="testimonial2-name">{props.name}</h2>
      </div>
    </div>
  );
}

export default Testimonial2;