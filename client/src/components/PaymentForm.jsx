// Payment form component for the application
import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const handleChange = (e) => {
        setPaymentData({
            ...paymentData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle payment submission logic here
        console.log('Payment submitted:', paymentData);
    };
    return (
        <form className="payment-form" onSubmit={handleSubmit}>
            <label>
                Card Number:
                <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} required />
            </label>
            <label>
                Expiry Date:
                <input type="text" name="expiryDate" value={paymentData.expiryDate} onChange={handleChange} required />
            </label>
            <label>
                CVV:
                <input type="text" name="cvv" value={paymentData.cvv} onChange={handleChange} required />
            </label>
            <button type="submit">Submit Payment</button>
        </form>
    );
};

export default PaymentForm;











