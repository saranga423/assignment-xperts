// Booking form component for the application
import React, { useState } from 'react';
import './BookingForm.css';
const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        service: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };
    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Date:
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>
            <label>
                Service:
                <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    <option value="consultation">Consultation</option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                </select>
            </label>
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default BookingForm;
