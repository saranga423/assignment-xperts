// Importing necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// pages and components
import Testimonials from './pages/Testimonials';
//import NavBar from './components/NavBar';
import AdminWidget from './components/AdminWidget';
import TestimonialCard from './components/TestimonialCard';
import BookingForm from './components/BookingForm';
//import ServiceList from './components/ServiceList';
import ContactForm from './components/ContactForm';
import ServiceCard from './components/ServiceCard';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
//import FAQ from './pages/FAQ';
import About from './pages/About';
import Booking from './pages/Booking';
//import AdminDashboard from './pages/AdminDashboard';
import Pricing from './pages/Pricing';
import Checkouts from './pages/Checkouts';




import './App.css';




// Main application component
const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/checkouts" element={<Checkouts />} />
                {/* Add more routes as needed */}
                <Route path="*" element={<h2>404: Page Not Found</h2>} />

            </Routes>
            <Footer />
        </Router>
    );
};
export default App;