import React, { useEffect, useState } from "react";
import "../style/HeroSection.css";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Vérifie la visibilité lors du défilement
  const handleScroll = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    // Vérifie la visibilité immédiatement après le rendu
    handleScroll();

    // Ajoute l'événement de défilement
    window.addEventListener("scroll", handleScroll);

    // Nettoie l'événement lors de la suppression du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero-section"
      className={`hero-section ${isVisible ? "visible" : ""}`}
    >
      <div className="hero-content">
        <h1 className="hero-title">We Are Edmonton's 24/7 Towing Experts</h1>
        <p className="hero-subtitle">
          From breakdowns to emergencies, B.M Towing Service is here to help.
        </p>
        <a href="tel:+1(587) 983-4844" className="cta-buttonHero">
          Call Now for Immediate Assistance
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
