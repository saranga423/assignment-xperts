// Utility functions for validating user input and data
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
};
export const isStrongPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

export const isValidDate = (date) => {
    return !isNaN(Date.parse(date));
};
export const isNonEmptyString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};
export const isValidZipCode = (zip) => {
    const zipRegex = /^\d{5}(-\d{4})?$/;
    return zipRegex.test(zip);
};  
export const isValidCreditCardNumber = (cardNumber) => {
    const cardRegex = /^\d{13,19}$/;
    return cardRegex.test(cardNumber);
};
export const isValidCVV = (cvv) => {
    const cvvRegex = /^\d{3,4}$/;
    return cvvRegex.test(cvv);
};
export const isValidExpiryDate = (expiry) => {
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return expiryRegex.test(expiry);
};
export const isValidURL = (url) => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};
export const isValidUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
};
export const isValidAge = (age) => {
    return Number.isInteger(age) && age >= 0 && age <= 120;
}
export const isValidName = (name) => {
    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
    return nameRegex.test(name);
};
export const isValidAddress = (address) => {
    return isNonEmptyString(address) && address.length <= 100;
};
export const isValidCity = (city) => {
    const cityRegex = /^[a-zA-Z\s'-]{2,50}$/;
    return cityRegex.test(city);
};
export const isValidState = (state) => {
    const stateRegex = /^[a-zA-Z\s'-]{2,50}$/;
    return stateRegex.test(state);
};
export const isValidCountry = (country) => {
    const countryRegex = /^[a-zA-Z\s'-]{2,50}$/;
    return countryRegex.test(country);
};
export const isValidPrice = (price) => {
    return typeof price === 'number' && price >= 0;
};
export const isValidQuantity = (quantity) => {
    return Number.isInteger(quantity) && quantity >= 0;
};
export const isValidProductName = (productName) => {
    return isNonEmptyString(productName) && productName.length <= 100;
};
export const isValidProductDescription = (description) => {
    return isNonEmptyString(description) && description.length <= 500;
};
export const isValidRating = (rating) => {
    return typeof rating === 'number' && rating >= 1 && rating <= 5;
};
export const isValidReview = (review) => {
    return isNonEmptyString(review) && review.length <= 1000;
};
export const isValidOrderID = (orderID) => {
    const orderIDRegex = /^[A-Z0-9]{8,20}$/;
    return orderIDRegex.test(orderID);
};
export const isValidTrackingNumber = (trackingNumber) => {
    const trackingRegex = /^[A-Z0-9]{10,30}$/;
    return trackingRegex.test(trackingNumber);
};
export const isValidShippingMethod = (method) => {
    const validMethods = ['Standard', 'Express', 'Overnight'];
    return validMethods.includes(method);
};
export const isValidPaymentMethod = (method) => {
    const validMethods = ['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer'];
    return validMethods.includes(method);
};
export const isValidTransactionID = (transactionID) => {
    const transactionIDRegex = /^[A-Z0-9]{10,30}$/;
    return transactionIDRegex.test(transactionID);
};
export const isValidAmount = (amount) => {
    return typeof amount === 'number' && amount >= 0;
};
export const isValidCurrency = (currency) => {
    const currencyRegex = /^[A-Z]{3}$/;
    return currencyRegex.test(currency);
};
export const isValidDateRange = (startDate, endDate) => {
    const start = Date.parse(startDate);
    const end = Date.parse(endDate);
    return !isNaN(start) && !isNaN(end) && start <= end;
};
export const isValidTime = (time) => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timeRegex.test(time);
};
export const isValidDateTime = (dateTime) => {
    return !isNaN(Date.parse(dateTime));
};
export const isValidFileName = (fileName) => {
    const fileNameRegex = /^[^<>:;,?"*|\/\\]+$/;
    return fileNameRegex.test(fileName);
};
export const isValidFileSize = (fileSize, maxSize) => {
    return typeof fileSize === 'number' && fileSize > 0 && fileSize <= maxSize;
};
export const isValidFileType = (fileType, allowedTypes) => {
    return allowedTypes.includes(fileType);
};
export const isValidIPAddress = (ip) => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
};
export const isValidHexColor = (color) => {
    const colorRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    return colorRegex.test(color);
};