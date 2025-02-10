import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/EmailForm.css'; 

const EmailForm = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");  // État pour afficher le message (succès ou erreur)
  const [isError, setIsError] = useState(false);  // État pour déterminer si l'envoi a échoué
  const form = useRef();

  const closeForm = () => {
    onClose();  // Ferme le formulaire en appelant la fonction onClose du parent
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ujra0mp', 'template_q4lf6l3', form.current, {
        publicKey: 'q24mVsItDcgSUvyPg',
      })
      .then(
        () => {
          setMessage("Email sent successfully!");  // Message de succès
          setIsError(false);  // Pas d'erreur
          setTimeout(() => {
            closeForm();  // Ferme le formulaire après 3 secondes
          }, 3000);  // Le message reste affiché pendant 3 secondes
        },
        (error) => {
          setMessage("Sending failed, please try again.");  // Message d'erreur
          setIsError(true);  // Active l'état d'erreur
        }
      );
  };

  return (
    <div>
      {/* Affiche le formulaire seulement si isOpen est true */}
      {isOpen && (
        <div className="email-form-container">
          <div className="email-form-header">
            <span className="close-icon" onClick={closeForm}>×</span>
          </div>
          <form ref={form} onSubmit={sendEmail} className="email-form">
            <h3>Contact Us</h3>
            <label>Name</label>
            <input type="text" name="from_name" required />
            <label>Email</label>
            <input type="email" name="from_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" className="submit-button" />
          </form>

          {/* Affichage du message de succès ou d'erreur */}
          <div className={`message ${isError ? 'error' : 'success'}`}>
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
