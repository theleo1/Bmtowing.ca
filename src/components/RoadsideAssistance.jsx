import React from 'react';
import '../style/RoadsideAssistance.css';
import { motion } from 'framer-motion';
import { FaCarBattery, FaGasPump, FaLock, FaTools } from 'react-icons/fa';

const RoadsideAssistance = () => {
  return (
    <motion.section
      className="roadside-service-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="roadside-service-title"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Roadside Assistance
      </motion.h1>

      <motion.p
        className="roadside-service-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Stuck on the road? We provide fast and reliable roadside assistance. Explore our services:
      </motion.p>

      {/* Section des services en ligne avec info-bulles */}
      <div className="roadside-services-line">
        <motion.div
          className="roadside-service-item"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaTools className="service-icon" />
          <div className="service-info">
            <h2>Tire Changes</h2>
            <p>Flat tire? We’ll replace it on the spot and get you back on the road quickly.</p>
          </div>
        </motion.div>

        <motion.div
          className="roadside-service-item"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <FaGasPump className="service-icon" />
          <div className="service-info">
            <h2>Fuel Delivery</h2>
            <p>Running low on gas? We’ll deliver fuel right to you so you can get to the next station.</p>
          </div>
        </motion.div>

        <motion.div
          className="roadside-service-item"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <FaLock className="service-icon" />
          <div className="service-info">
            <h2>Lockout Services</h2>
            <p>Locked out of your car? We’ll help you regain access quickly and safely.</p>
          </div>
        </motion.div>

        <motion.div
          className="roadside-service-item"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <FaCarBattery className="service-icon" />
          <div className="service-info">
            <h2>Battery Jump-Starts</h2>
            <p>Dead battery? We’ll jump-start your car and get you back on your way!</p>
          </div>
        </motion.div>
      </div>

      <p className="roadside-service-text">
        Available 24/7 to assist you. Don’t hesitate to reach out whenever you need us!
      </p>
    </motion.section>
  );
};

export default RoadsideAssistance;
