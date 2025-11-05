// src/pages/Home.jsx
import React from 'react';
import './Home.css';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const services = [
    {
      name: 'Academic Writing Assistance',
      description:
        'Expert guidance and editing for essays, reports, and research papers to help you achieve excellence.',
      price: 100,
    },
    {
      name: 'Presentation & Design Services',
      description:
        'Create impactful PowerPoints, posters, and infographics for academic and corporate use.',
      price: 150,
    },
    {
      name: 'Plagiarism & Proofreading',
      description:
        'Ensure originality and professional polish in your assignments with our advanced review tools.',
      price: 80,
    },
  ];

  const testimonials = [
    {
      message:
        'Assignment Xpert’s made my final-year project report so much easier to complete. Their feedback was invaluable!',
      author: 'Sarah, University of Sydney',
    },
    {
      message:
        'Professional, on-time, and very supportive. I highly recommend their academic assistance services.',
      author: 'Daniel, MBA Student',
    },
    {
      message:
        'Their team helped me with formatting and editing that improved my overall grade significantly.',
      author: 'Priya, Research Scholar',
    },
  ];

  return (
    <div className="home-page">
      {/* --- Hero Section --- */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering Students with Expert Assignment Solutions</h1>
          <p>
            From academic writing to design and proofreading, our team of experts helps you achieve excellence with confidence and clarity.
          </p>
          <a href="/booking" className="cta-button">
            Get Started Today
          </a>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="services-section">
        <h2>Our Expert Services</h2>
        <p className="section-subtitle">
          Tailored solutions for students, researchers, and professionals.
        </p>
        <div className="services-list">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <p className="section-subtitle">
          Hear from students and professionals who trust Assignment Xpert’s.
        </p>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* --- Call to Action Footer --- */}
      <section className="cta-section">
        <h2>Ready to Excel in Your Next Assignment?</h2>
        <p>
          Let our experts help you deliver high-quality work that stands out.
        </p>
        <a href="/contact" className="cta-button secondary">
          Contact Us Now
        </a>
      </section>
    </div>
  );
};

export default Home;
