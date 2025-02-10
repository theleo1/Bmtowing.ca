import React, { useEffect } from 'react';
import { FaClock, FaTruck, FaDollarSign, FaMapMarkedAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/WhyChooseUs.css';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durée de l'animation
      once: true, // Animation exécutée une seule fois
    });
  }, []);

  return (
    <section id="WhychooseUs" className="why-choose-us">
      <h2 data-aos="fade-right" className="animated-title">Why Choose B.M Towing Service?</h2>
      <p data-aos="fade-right" className="animated-text">
        At B.M Towing Service, we pride ourselves on offering 24/7 availability, unmatched speed, reliability, and exceptional customer service. Here's why we stand out:
      </p>
      <div className="features">
        <div className="feature-item" data-aos="fade-up">
          <FaClock className="feature-icon" />
          <h3>24/7 Availability</h3>
          <p>Always here when you need us, any time of the day or night.</p>
        </div>
        <div className="feature-item" data-aos="fade-up">
          <FaTruck className="feature-icon" />
          <h3>Modern Equipment</h3>
          <p>Equipped with state-of-the-art towing trucks and tools for every situation.</p>
        </div>
        <div className="feature-item" data-aos="fade-up">
          <FaDollarSign className="feature-icon" />
          <h3>Affordable Pricing</h3>
          <p>Competitive rates with no compromise on quality.</p>
        </div>
        <div className="feature-item" data-aos="fade-up">
          <FaMapMarkedAlt className="feature-icon" />
          <h3>Wide Service Area</h3>
          <p>Serving Edmonton and its surrounding areas efficiently.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
