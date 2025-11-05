// src/pages/Booking.jsx
import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.date || !formData.service) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    setError("");
    setSubmitted(true);
    console.log("Booking details:", formData);

    // Reset form after submission
    setFormData({ name: "", email: "", date: "", service: "" });
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1>Book Your Appointment</h1>
        <p className="subtitle">
          Schedule your session easily — select your service, date, and we’ll take care of the rest.
        </p>

        {error && <p className="error-message">{error}</p>}
        {submitted && (
          <p className="success-message">
            ✅ Your booking has been received! We’ll get in touch shortly.
          </p>
        )}

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Select Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">-- Choose a Service --</option>
              <option value="consultation">Consultation</option>
              <option value="installation">Installation</option>
              <option value="maintenance">Maintenance</option>
              <option value="training">Training</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
