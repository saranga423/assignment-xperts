// src/pages/Pricing.jsx
import React from "react";
import "./Pricing.css";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$99",
      tagline: "Perfect for small, quick assignments",
      features: [
        "1 Project Assistance",
        "Email Support",
        "Basic Editing",
        "Delivery in 3 days",
      ],
      highlight: false,
    },
    {
      name: "Professional Plan",
      price: "$199",
      tagline: "Best for students & professionals with ongoing work",
      features: [
        "Up to 3 Projects",
        "Priority Support",
        "In-depth Research",
        "Delivery in 2 days",
      ],
      highlight: true,
      ribbon: "Most Popular",
    },
    {
      name: "Premium Plan",
      price: "$299",
      tagline: "For teams or long-term academic partnerships",
      features: [
        "Unlimited Projects",
        "24/7 Expert Support",
        "Personalized Consultation",
        "Delivery in 1 day",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="pricing-page">
      {/* Header */}
      <motion.header
        className="pricing-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Pricing Plans</h1>
        <p>
          Flexible and transparent pricing tailored for academic and corporate needs.  
          Choose the plan that fits your goals and let <strong>Assignment Xpert’s</strong> handle the rest.
        </p>
      </motion.header>

      {/* Pricing Grid */}
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {plan.ribbon && <div className="ribbon">{plan.ribbon}</div>}

            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-tagline">{plan.tagline}</p>

            <div className="plan-price">{plan.price}</div>

            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <CheckCircle size={18} className="icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`plan-button ${
                plan.highlight ? "primary-button" : "outline-button"
              }`}
            >
              {plan.highlight ? "Get Started" : "Choose Plan"}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Custom Plan CTA */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Need a Custom Plan?</h2>
        <p>
          Have a complex project or long-term academic goals?  
          Let our experts create a <strong>custom-tailored package</strong> for you.
        </p>
        <button className="cta-button">Contact Our Team</button>
      </motion.section>
    </div>
  );
};

export default Pricing;
