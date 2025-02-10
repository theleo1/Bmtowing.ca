import React, { useState } from "react";
import EmailForm from "./EmailForm";  // Vérifiez que ce fichier existe et ne contient pas d'erreurs
import "../style/CallToAction.css";  // Vérifiez ce fichier également

const CallToAction = () => {
  const [showForm, setShowForm] = useState(false); // Contrôle si le formulaire est ouvert ou non

  const handleCloseForm = () => {
    setShowForm(false); // Ferme le formulaire
  };

  const handleOpenForm = () => {
    setShowForm(true); // Ouvre le formulaire
  };

  return (
    <section id="CallToAction" className="cta">
      <div className="cta-content">
        <h2>Need Immediate Assistance? We're Just a Call Away.</h2>
        <button
          className="cta-buttonCall"
          onClick={handleOpenForm} // Ouvre le formulaire
          aria-label="Open Contact Form"
        >
          Contact Us Now
        </button>

        {/* Le formulaire sera affiché si showForm est true */}
        <EmailForm isOpen={showForm} onClose={handleCloseForm} />
      </div>
    </section>
  );
};

export default CallToAction;
