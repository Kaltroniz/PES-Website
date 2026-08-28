import React, { useEffect, useRef, useState } from "react";
import "../styles/componentsStyles/ScrollReveal.css";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'fade'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-box reveal-${direction} ${
        isVisible ? "revealed" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
