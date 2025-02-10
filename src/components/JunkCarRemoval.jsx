import React from "react";
import { motion } from "framer-motion";
import "../style/JunkCarRemoval.css";
import { FaCar, FaRecycle, FaCashRegister, FaCheckCircle, FaGlobeAmericas } from 'react-icons/fa';

const JunkCarRemoval = () => {
  return (
    <motion.section
      className="service-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="junk-car-removal-title">Junk Car Removal</h1>

      <p className="junk-car-removal-text">
        Getting rid of an old, unwanted car has never been easier. Our Junk Car Removal service is fast, reliable, and environmentally friendly. Here’s what we offer:
      </p>

      {[{
          title: "Free Car Pickup",
          content: "We provide free junk car pickup from your location, ensuring that the process is hassle-free. We’ll arrive at your location and take care of the entire removal process.",
          icon: <FaCar />
        },
        {
          title: "Eco-Friendly Disposal",
          content: "Your car will be disposed of responsibly, in compliance with environmental regulations. We recycle parts and fluids to ensure minimal impact on the environment.",
          icon: <FaRecycle />
        },
        {
          title: "Same-Day Service",
          content: "Need your car removed quickly? We offer same-day pickup services to ensure a fast and efficient process for getting rid of your old vehicle.",
          icon: <FaCheckCircle />
        },
        {
          title: "Top Dollar Paid",
          content: "Get cash for your junk car! We offer competitive prices for your vehicle, no matter its condition. We’ll give you a fair and transparent quote for your car.",
          icon: <FaCashRegister />
        },
        {
          title: "Licensed & Insured",
          content: "We are a licensed and insured company, so you can trust that your car is in safe hands. Our professional team will ensure the safe and legal removal of your vehicle.",
          icon: <FaCheckCircle />
        },
      ].map(({ title, content, icon }) => (
        <motion.div
          className="service-detail"
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="service-icon">{icon}</span>
            <strong>{title}:</strong>
          </motion.h2>
          <p>{content}</p>
        </motion.div>
      ))}

      <p className="junk-car-removal-text">
        Our Junk Car Removal service is the easiest and most convenient way to get rid of your unwanted vehicle. Contact us today to schedule a pickup!
      </p>
    </motion.section>
  );
};

export default JunkCarRemoval;
