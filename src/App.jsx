import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Assurez-vous d'importer le Router
import { useSpring, animated } from 'react-spring'; // Animation
import './App.css';

import Header from './components/Header';
import HomePage from './components/HomePage';
import OurServices from './components/OurServices';
import TowingService from './components/TowingService';
import RoadsideAssistance from './components/RoadsideAssistance';
import LongDistanceTowing from './components/LongDistanceTowing';
import LuxuryVehicleTransport from './components/LuxuryVehicleTransport';
import JunkCarRemoval from './components/JunkCarRemoval';

import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Location from './components/Location';
import Footer from './components/Footer';
import AppointmentPage from './components/AppointmentPage';

const App = () => {
  const [showAppointment, setShowAppointment] = useState(false); // État pour afficher ou masquer le formulaire
  const location = useLocation(); // Utilisation du hook useLocation

  // Fonction pour gérer l'affichage du formulaire de rendez-vous
  const toggleAppointmentForm = () => {
    setShowAppointment(!showAppointment);
  };

  // Animation pour afficher ou masquer le formulaire
  const appointmentAnimation = useSpring({
    opacity: showAppointment ? 1 : 0,
    transform: showAppointment ? 'translateY(0)' : 'translateY(-100%)',
    config: { tension: 220, friction: 60 },
  });

  useEffect(() => {
    if (location.state?.scrollTo) {
      document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]); // Ajout de location comme dépendance

  // Composant pour envelopper les routes et ajouter le Footer
  const RouteWithFooter = ({ element }) => (
    <>
      {element}
      <Footer />
    </>
  );

  return (
    <div className="App">
      {/* Barre de navigation globale */}
      <Header toggleAppointmentForm={toggleAppointmentForm} />

      {/* Routes principales */}
      <Routes>
        <Route
          path="/"
          element={
            <RouteWithFooter
              element={
                <>
                  <HomePage />
                  <OurServices />
                  <WhyChooseUs />
                  <Testimonials />
                  <CallToAction toggleAppointmentForm={toggleAppointmentForm} />
                  <Location />
                </>
              }
            />
          }
        />

        {/* Pages des services */}
        <Route
          path="/TowingService"
          element={<RouteWithFooter element={<TowingService />} />}
        />
        <Route
          path="/RoadsideAssistance"
          element={<RouteWithFooter element={<RoadsideAssistance />} />}
        />
        <Route
          path="/LongDistanceTowing"
          element={<RouteWithFooter element={<LongDistanceTowing />} />}
        />
        <Route
          path="/LuxuryVehicleTransport"
          element={<RouteWithFooter element={<LuxuryVehicleTransport />} />}
        />
        <Route
          path="/JunkCarRemoval"
          element={<RouteWithFooter element={<JunkCarRemoval />} />}
        />

        {/* Pages supplémentaires */}
        <Route
          path="/WhyChooseUs"
          element={<RouteWithFooter element={<WhyChooseUs />} />}
        />
        <Route
          path="/Testimonials"
          element={<RouteWithFooter element={<Testimonials />} />}
        />
        <Route
          path="/CallToAction"
          element={<RouteWithFooter element={<CallToAction toggleAppointmentForm={toggleAppointmentForm} />} />}
        />
        <Route
          path="/Location"
          element={<RouteWithFooter element={<Location />} />}
        />

        {/* Page de prise de rendez-vous */}
        <Route
          path="/appointment"
          element={
            <>
              <AppointmentPage closeForm={toggleAppointmentForm} />
              <Footer />
            </>
          }
        />
      </Routes>

      {/* Modal pour le formulaire de rendez-vous */}
      {showAppointment && (
        <animated.div
          style={appointmentAnimation}
          className={`appointment-modal ${showAppointment ? 'visible' : ''}`}
        >
          <div className="appointment-overlay" onClick={toggleAppointmentForm}></div>
          <div className="appointment-content">
            {/* Contenu du formulaire modal */}
            <AppointmentPage closeForm={toggleAppointmentForm} />
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default App;

