import React from 'react';
import '../style/TowingService.css';
import { motion } from 'framer-motion';
import { FaTruck, FaClock, FaMoneyBillWave, FaCarCrash, FaShieldAlt } from 'react-icons/fa';

const TowingService = () => {
  return (
    <motion.section
      className="towing-service-container"
      id="towing-service-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="towing-service-title"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Towing Service 24/7
      </motion.h1>

      <motion.p
        className="towing-service-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Stranded on the side of the road? Our 24/7 towing service is here to assist you at any time of the day or night. Here's what we offer:
      </motion.p>

      {/* Service Section */}
      <div className="towing-service-grid">
        <motion.div
          className="towing-service-detail"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaClock className="towing-service-icon" />
          <h2>24/7 Availability</h2>
          <p>
            Whether it’s day or night, our team is always ready to assist you. We’re just a call away to provide quick and reliable towing service whenever you need it.
          </p>
        </motion.div>

        <motion.div
          className="towing-service-detail"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaTruck className="towing-service-icon" />
          <h2>Quick Response Time</h2>
          <p>
            We understand the urgency of a breakdown situation. Our team ensures that we arrive as quickly as possible, so you’re not left waiting for long.
          </p>
        </motion.div>

        <motion.div
          className="towing-service-detail"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <FaShieldAlt className="towing-service-icon" />
          <h2>Flatbed Towing</h2>
          <p>
            We use flatbed tow trucks to safely transport your vehicle. Whether it’s a car, truck, or motorcycle, we ensure a smooth and damage-free ride.
          </p>
        </motion.div>

        <motion.div
          className="towing-service-detail"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaCarCrash className="towing-service-icon" />
          <h2>Accident Towing</h2>
          <p>
            If you’re involved in an accident, we can provide immediate towing services to move your vehicle to a safe location. We’ll handle all the logistics for you.
          </p>
        </motion.div>

        <motion.div
          className="towing-service-detail"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <FaMoneyBillWave className="towing-service-icon" />
          <h2>Affordable Rates</h2>
          <p>
            Our towing service is both reliable and affordable. We offer transparent pricing, ensuring that you won’t have any surprises when it comes to costs.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TowingService;
