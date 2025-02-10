import React from 'react';
import '../style/LuxuryVehicleTransport.css';
import { motion } from 'framer-motion';
import { FaTruck, FaShieldAlt, FaMapMarkedAlt, FaGlobe } from 'react-icons/fa'; // Icônes FontAwesome

const LuxuryVehicleTransport = () => {
  return (
    <motion.section
      className="service-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="luxury-vehicle-title">Luxury Vehicle Transport</h1>

      <p className="luxury-vehicle-text">
        Transporting luxury or exotic vehicles requires the highest level of care and attention. Our Luxury Vehicle Transport service is designed to ensure your high-end car arrives safely and in pristine condition, no matter the distance.
      </p>

      {/* Sections des services avec icônes */}
      <div className="service-detail">
        <motion.div
          className="service-icon"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaTruck className="icon" />
        </motion.div>
        <motion.h2
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <strong>Specialized Equipment:</strong>
        </motion.h2>
        <p>
          We use enclosed, air-ride trailers designed to protect your luxury vehicle from weather conditions, road debris, and potential damage. Our equipment ensures that your vehicle is transported securely and comfortably.
        </p>
      </div>

      <div className="service-detail">
        <motion.div
          className="service-icon"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <FaShieldAlt className="icon" />
        </motion.div>
        <motion.h2
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <strong>Experienced Drivers:</strong>
        </motion.h2>
        <p>
          Our team consists of experienced, highly-trained drivers who specialize in transporting luxury cars. You can trust that your vehicle will be handled with the utmost care and attention throughout the journey.
        </p>
      </div>

      <div className="service-detail">
        <motion.div
          className="service-icon"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FaMapMarkedAlt className="icon" />
        </motion.div>
        <motion.h2
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <strong>Door-to-Door Service:</strong>
        </motion.h2>
        <p>
          We offer convenient door-to-door transport, meaning we pick up your vehicle from your location and deliver it directly to your destination. This ensures a seamless experience with no additional hassle for you.
        </p>
      </div>

      <div className="service-detail">
        <motion.div
          className="service-icon"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <FaShieldAlt className="icon" />
        </motion.div>
        <motion.h2
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <strong>Fully Insured:</strong>
        </motion.h2>
        <p>
          Your luxury vehicle is fully insured during transport. We offer comprehensive insurance coverage to protect your car against any unforeseen circumstances, so you can have peace of mind.
        </p>
      </div>

      <div className="service-detail">
        <motion.div
          className="service-icon"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FaGlobe className="icon" />
        </motion.div>
        <motion.h2
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <strong>Worldwide Shipping:</strong>
        </motion.h2>
        <p>
          Whether you're shipping your luxury vehicle across the country or overseas, we offer reliable and secure international transport services. Our logistics team ensures that all details are taken care of.
        </p>
      </div>

      <p className="luxury-vehicle-text">
        When you choose our Luxury Vehicle Transport service, you’re choosing a safe, reliable, and hassle-free experience. Contact us today to discuss how we can assist with your luxury vehicle transport needs.
      </p>
    </motion.section>
  );
};

export default LuxuryVehicleTransport;
