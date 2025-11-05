// Service card component for the application
import React from 'react';
import './ServiceCard.css';
const ServiceCard = ({ service }) => {
    return (
        <div className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <span className="service-price">${service.price}</span>
        </div>
    );
}
export default ServiceCard;