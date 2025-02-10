import React from 'react';
import '../style/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link, Route } from 'react-router-dom';  // Importation de Link

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>📍 11035 199 Street NW Edmonton <br />
            T5S 2C6
          </p>
          <p>📞 +1(587) 983-4844</p>
          <p>✉️ info@BMtowing.ca</p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/WhychooseUs">About Us</Link></li>
            <li><Link to="/ourServices">Services</Link></li> 

            <li><Link to="/Testimonials">Testimonials</Link></li>
            <li><Link to="/CallToAction">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/+15879834844" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="whatsapp-button">
        <a href="https://wa.me/+15879834844" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2024 BM Towing Service. All rights reserved by Kamal DEV.</p>
      </div>
    </footer>
  );
};

export default Footer;
