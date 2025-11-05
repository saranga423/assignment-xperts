// Testimonial card component for the application
import React from 'react';
import './TestimonialCard.css';
const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="testimonial-card">
            <p className="testimonial-message">"{testimonial.message}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
        </div>
    );
};

export default TestimonialCard;
