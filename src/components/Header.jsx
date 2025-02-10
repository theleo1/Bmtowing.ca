import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom"; // Importation de useLocation
import { FaHome } from 'react-icons/fa';
import '../style/Header.css';
import logo from "./img/backgroundtowing.png";

const Header = ({ toggleAppointmentForm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const logoRef = useRef(null);
  const navigate = useNavigate();  // Hook de navigation
  const location = useLocation();  // Hook pour obtenir l'emplacement actuel

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.classList.add("animate-logo");
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleDropdown = () => setDropdownOpen((prev) => !prev);

  // Fonction pour gérer la navigation avec un défilement fluide
  const handleNavigation = (path, sectionId) => {
    if (location.pathname === path) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path, { state: { scrollTo: sectionId } });
    }
  };

  const closeDropdown = () => setDropdownOpen(false);  // Fermer le menu déroulant après clic

  return (
    <header>
      <nav aria-label="Main navigation">
        <div className="logo-container">
          <img
            ref={logoRef}
            src={logo}
            alt="BM Towing Logo"
            className="logo"
            aria-label="BM Towing Logo"
          />
          <span className="slogan">BM Towing</span>
        </div>
        <button
          className="hamburger-icon"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          &#9776;
        </button>
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`} role="menu">
          <li>
            <NavLink
              to="/"
              className="home-button"
              aria-label="Go to Home"
            >
              <FaHome size={20} />
            </NavLink>
          </li>
          <li className="dropdown">
            <button
              onClick={handleDropdown}
              className="dropdown-button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen ? "true" : "false"}
              aria-label="Our Services"
            >
              Our Services
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu" role="menu">
                <li><NavLink to="/TowingService" role="menuitem" onClick={closeDropdown}>Towing Service</NavLink></li>
                <li><NavLink to="/RoadsideAssistance" role="menuitem" onClick={closeDropdown}>Roadside Assistance</NavLink></li>
                <li><NavLink to="/LongDistanceTowing" role="menuitem" onClick={closeDropdown}>Long-Distance Towing</NavLink></li>
                <li><NavLink to="/LuxuryVehicleTransport" role="menuitem" onClick={closeDropdown}>Luxury Vehicle Transport</NavLink></li>
                <li><NavLink to="/JunkCarRemoval" role="menuitem" onClick={closeDropdown}>Junk Car Removal</NavLink></li>
              </ul>
            )}
          </li>
          <li><NavLink to="/WhyChooseUs" role="menuitem" onClick={closeDropdown}>About Us</NavLink></li>
          <li><NavLink to="/Testimonials" role="menuitem" onClick={closeDropdown}>Testimonials</NavLink></li>
          <li><NavLink to="/CallToAction" role="menuitem" onClick={closeDropdown}>Contact Us</NavLink></li>
          <li><NavLink to="#" className="cta-button-Appointment" onClick={toggleAppointmentForm} role="menuitem">
              Get Appointment
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
