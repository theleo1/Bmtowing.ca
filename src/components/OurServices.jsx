import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer correctement react-router-dom
import '../style/OurServices.css';
import { FaWrench, FaTruck, FaMapMarkerAlt, FaCar, FaTrashAlt } from 'react-icons/fa';

const OurServices = () => {
  useEffect(() => {
    // Initialiser AOS
    AOS.init({
      duration: 1200, // Durée de l'animation
      easing: 'ease-in-out', // Easing de l'animation
      once: true, // L'animation se produit une seule fois
    });

    // Rafraîchir AOS pour s'assurer qu'il applique les animations après le rendu du composant
    AOS.refresh();
    
    // Le nettoyage de AOS à la désactivation du composant
    return () => {
      AOS.refresh();
    };
  }, []); // On utilise [] pour que l'effet ne se déclenche qu'une seule fois après le premier rendu

  return (
    <section id="our-Services" className="our-services">
      <h2 data-aos="fade-down">Our Services</h2>
      <p className="section-description" data-aos="fade-down" data-aos-delay="200">
        At B.M Towing Service, we provide a wide range of professional and reliable towing and roadside assistance solutions to meet all your needs. Explore our key services below.
      </p>

      <div className="service-grid">
        <Link to="/TowingService" className="service-item" data-aos="fade-up" data-aos-delay="300">
          <FaTruck className="service-iconO" />
          <h3>24/7 Towing</h3>
          <p>Reliable towing service available day and night, ensuring you're never stranded.</p>
        </Link>

        <Link to="/RoadsideAssistance" className="service-item" data-aos="fade-up" data-aos-delay="400">
          <FaWrench className="service-iconO" />
          <h3>Roadside Assistance</h3>
          <p>From flat tires to jump starts, we’ve got you covered with quick and professional assistance.</p>
        </Link>

        <Link to="/LongDistanceTowing" className="service-item" data-aos="fade-up" data-aos-delay="500">
          <FaMapMarkerAlt className="service-iconO" />
          <h3>Long-Distance Towing</h3>
          <p>We ensure the safe transport of your vehicle across long distances with efficiency and care.</p>
        </Link>

        <Link to="/LuxuryVehicleTransport" className="service-item" data-aos="fade-up" data-aos-delay="600">
          <FaCar className="service-iconO" />
          <h3>Luxury Vehicle Transport</h3>
          <p>Specialized transport services for high-value vehicles, ensuring damage-free delivery.</p>
        </Link>

        <Link to="/JunkCarRemoval" className="service-item" data-aos="fade-up" data-aos-delay="700">
          <FaTrashAlt className="service-iconO" />
          <h3>Junk Car Removal</h3>
          <p>Eco-friendly removal and recycling of old or unwanted vehicles, hassle-free.</p>
        </Link>
      </div>
    </section>
  );
};

export default OurServices;
