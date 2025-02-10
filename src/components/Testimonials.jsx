import React, { useEffect, useState } from 'react';
import '../style/Testimonials.css'; // Assurez-vous que ce fichier existe
import { FaQuoteLeft, FaUserAlt, FaSmile } from 'react-icons/fa'; // Importation de plusieurs icônes

const Testimonials = () => {
  // Liste des témoignages avec différentes icônes
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'The service was incredibly fast and professional. Highly recommend B.M Towing!',
      icon: <FaUserAlt size={50} color="#ff5722" />, // Icône d'utilisateur
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Great experience! They helped me out during a tough situation. Excellent service!',
      icon: <FaSmile size={50} color="#ff5722" />, // Icône de sourire
    },
    {
      id: 3,
      name: 'Mike Johnson',
      text: 'Reliable and friendly staff. I will definitely call them again if needed.',
      icon: <FaUserAlt size={50} color="#ff5722" />, // Icône d'utilisateur
    },
  ];

  // État pour gérer la visibilité des témoignages après un délai
  const [visible, setVisible] = useState(false);

  // Utilisation de useEffect pour rendre les témoignages visibles après 1 seconde
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer); // Nettoyage du timer à la fin
  }, []);

  return (
    <section id="Testimonials" className={`testimonials ${visible ? 'visible' : ''}`}>
      <h2 data-aos="fade-up">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-item"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <FaQuoteLeft className="quote-icon" />
            <p>{testimonial.text}</p>
            <div className="customer-info">
              {/* Remplacer l'image par une icône */}
              <div className="icon-container">
                {testimonial.icon} {/* Icône dynamique */}
              </div>
              <span>{testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
