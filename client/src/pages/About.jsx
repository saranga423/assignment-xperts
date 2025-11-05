// About page component for the application
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <h1>About Assignment Xperts</h1>
            <p>
                Assignment Xperts is dedicated to providing top-notch academic assistance to students worldwide.
                Our team of experts specializes in various subjects to help you achieve your academic goals.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to empower students by providing high-quality, reliable, and affordable assignment help services.
            </p>
            <h2>Why Choose Us?</h2>
            <ul>
                <li>Experienced and qualified experts</li>
                <li>24/7 customer support</li>
                <li>Plagiarism-free work</li>
                <li>Timely delivery</li>
            </ul>
        </div>
    );
};
export default About;