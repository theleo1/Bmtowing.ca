import React from 'react';
import '../style/LongDistanceTowing.css';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaShieldAlt, FaDollarSign, FaClock } from 'react-icons/fa'; // Ajout d'icônes

const LongDistanceTowing = () => {
  return (
    <motion.section
      className="service-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="long-distance-towing-title">Long Distance Towing</h1>

      <p className="long-distance-towing-text">
        When you need to move your vehicle over long distances, trust our Long Distance Towing service to get it to your destination safely and efficiently. Here’s what we offer:
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
          <FaMapMarkerAlt className="icon" />
        </motion.div>
        <motion.h2
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <strong>Nationwide Coverage:</strong>
        </motion.h2>
        <p>
          Whether it’s across state lines or across the country, we can safely transport your vehicle to any destination. Our long-distance towing service covers a wide range of locations, ensuring your vehicle gets where it needs to go.
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
          <strong>Safe & Secure Transport:</strong>
        </motion.h2>
        <p>
          Your vehicle is in good hands with our experienced team. We use the best towing equipment to ensure that your car, truck, or motorcycle is securely transported without damage.
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
          <FaDollarSign className="icon" />
        </motion.div>
        <motion.h2
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <strong>Affordable Rates:</strong>
        </motion.h2>
        <p>
          Moving a vehicle over long distances doesn’t have to be expensive. We offer competitive rates for long-distance towing, giving you the best value for your money.
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
          <FaClock className="icon" />
        </motion.div>
        <motion.h2
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <strong>Timely Delivery:</strong>
        </motion.h2>
        <p>
          We prioritize timely delivery of your vehicle. Whether it’s for a move, a vacation, or other needs, we’ll get your vehicle to its destination within the scheduled timeframe.
        </p>
      </div>

      <p className="long-distance-towing-text">
        Our Long Distance Towing service is the most reliable option for transporting vehicles over long distances. Contact us for a quote and to arrange your towing today!
      </p>
    </motion.section>
  );
};

export default LongDistanceTowing;
