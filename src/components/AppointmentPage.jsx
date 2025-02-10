import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../style/AppointmentPage.css";

const AppointmentPage = ({ closeForm }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handle time selection
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!selectedDate || !selectedTime) {
      setErrorMessage("Please select a date and time for the appointment.");
      return;
    }
    if (!form.name || !form.email || !form.phone || !form.message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      from_phone: form.phone,
      from_date: selectedDate.toLocaleDateString(),
      time: selectedTime,
      message: form.message,
    };

    console.log(templateParams);  // Debugging log to check values

    // Send the email via EmailJS
    emailjs
      .send(
        'service_p8ijlnc', // Service ID
        'template_snwm7oj', // Template ID
        templateParams,     // Template parameters
        'q24mVsItDcgSUvyPg' // Public key
      )
      .then(
        () => {
          alert("Your appointment request has been sent successfully!");
          setForm({ name: "", email: "", phone: "", message: "" });
          setSelectedDate(null);
          setSelectedTime("");
          setErrorMessage(""); // Reset error message
          closeForm(); // Close the form after successful submission
        },
        (error) => {
          console.error("Error sending email:", error);
          setErrorMessage("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div id="Appointment" className="form-container">
      <button className="croix" onClick={closeForm}>
        X
      </button>
      <h2>Make an appointment</h2>

      {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone :</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Select a Date :</label>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
        <div>
          <label htmlFor="time">Select Time :</label>
          <input
            id="time"
            type="time"
            name="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentPage;
