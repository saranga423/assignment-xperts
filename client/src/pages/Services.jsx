// src/pages/Services.jsx
import React from "react";
import "./Services.css";
import { Code, PenTool, Search, FileText, BookOpen, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description:
        "Responsive, dynamic websites built using modern frameworks to boost your online presence.",
      price: "$499",
    },
    {
      icon: <PenTool size={40} />,
      title: "Academic Writing",
      description:
        "Professional writing and editing support for assignments, reports, and research papers.",
      price: "$99",
    },
    {
      icon: <Search size={40} />,
      title: "SEO Optimization",
      description:
        "Enhance your website ranking and visibility through smart SEO strategies.",
      price: "$299",
    },
    {
      icon: <FileText size={40} />,
      title: "Content Creation",
      description:
        "Engaging blog posts, social media content, and copywriting tailored to your goals.",
      price: "$149",
    },
    {
      icon: <BookOpen size={40} />,
      title: "Tutoring Support",
      description:
        "One-on-one guidance for academic improvement and skill development.",
      price: "$59/session",
    },
    {
      icon: <Database size={40} />,
      title: "Data Analysis",
      description:
        "Insightful data analytics and visualization for your projects or research.",
      price: "$199",
    },
  ];

  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>
          Explore our comprehensive range of academic and corporate services —
          designed to empower your success.
        </p>
      </header>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="price-tag">{service.price}</div>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
