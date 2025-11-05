// Register.jsx
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value.trimStart() }); // prevent leading spaces
    };

    const validate = () => {
        const newErrors = {};

        // --- Username Validation ---
        if (!formData.username) newErrors.username = 'Username is required';
        else if (formData.username.length < 3)
            newErrors.username = 'Username must be at least 3 characters';

        // --- Email Validation (simple regex) ---
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!emailPattern.test(formData.email))
            newErrors.email = 'Enter a valid email address';

        // --- Password Validation ---
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8)
            newErrors.password = 'Password must be at least 8 characters';
        else if (!/[A-Z]/.test(formData.password))
            newErrors.password = 'Password must include at least one uppercase letter';
        else if (!/[a-z]/.test(formData.password))
            newErrors.password = 'Password must include at least one lowercase letter';
        else if (!/[0-9]/.test(formData.password))
            newErrors.password = 'Password must include at least one number';
        else if (!/[!@#$%^&*]/.test(formData.password))
            newErrors.password = 'Password must include at least one special character (!@#$%^&*)';

        // --- Confirm Password ---
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            try {
                // --- Sanitize input before sending (basic trimming already done) ---
                const sanitizedData = {
                    username: formData.username.trim(),
                    email: formData.email.trim(),
                    password: formData.password, // hashing happens in backend
                };

                // --- Example API call (replace with your backend route) ---
                const response = await fetch('http://localhost:5000/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(sanitizedData),
                });

                if (response.ok) {
                    setSuccessMessage('Registration successful!');
                    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
                    setErrors({});
                } else {
                    const result = await response.json();
                    setErrors({ server: result.message || 'Server error occurred.' });
                }
            } catch (error) {
                setErrors({ server: 'Network error. Please try again later.' });
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="register-page">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                    {errors.username && <span className="error">{errors.username}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                        required
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                        required
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>

                {errors.server && <p className="error server-error">{errors.server}</p>}
                {successMessage && <p className="success">{successMessage}</p>}

                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default Register;
