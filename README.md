# assignment-xperts

Assignment Xperts is a full-stack web platform designed to simplify assignment help, service bookings, and academic support for students.
It features a user-friendly frontend built with React.js and a secure backend powered by Node.js, Express, and MongoDB.

# Features
Frontend (React)

Responsive and modern UI with clean layouts

Pages: Home, Services, Pricing, Contact, Login, Booking

Form validation and smooth navigation using React Router

Integrated login and booking flows

Styled with CSS and reusable components

Backend (Node + Express + MongoDB)

RESTful API architecture

JWT-based authentication (Login / Register)

CRUD operations for:

Services

Bookings

Testimonials

Contact forms

Email notifications via Nodemailer

Secure password hashing with bcrypt

Centralized error handling and validation middleware

# Project Structure

assignment-xperts/
│
├── client/ # React Frontend
│ ├── public/
│ │ ├── index.html
│ │ └── favicon.ico
│ │
│ ├── src/
│ │ ├── assets/ # images, icons, logos
│ │ ├── components/
│ │ │ ├── Navbar/
│ │ │ ├── Footer/
│ │ │ ├── Forms/
│ │ │ └── Shared/
│ │ │
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── Services.jsx
│ │ │ ├── Pricing.jsx
│ │ │ ├── Contact.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Booking.jsx
│ │ │ └── NotFound.jsx
│ │ │
│ │ ├── App.js
│ │ ├── index.js
│ │ └── App.css
│ │
│ ├── package.json
│ ├── .env.example # optional sample env for frontend APIs
│ └── README.md
│
├── server/ # Node + Express Backend
│ ├── server.js # entry point
│ ├── package.json
│ │
│ ├── config/
│ │ └── db.js # MongoDB connection setup
│ │
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── bookingController.js
│ │ ├── contactController.js
│ │ ├── serviceController.js
│ │ ├── testimonialController.js
│ │ └── paymentController.js
│ │
│ ├── models/
│ │ ├── User.model.js
│ │ ├── Service.model.js
│ │ ├── Booking.model.js
│ │ ├── Contact.model.js
│ │ └── Testimonial.model.js
│ │
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── bookingRoutes.js
│ │ ├── contactRoutes.js
│ │ ├── serviceRoutes.js
│ │ ├── testimonialRoutes.js
│ │ └── paymentRoutes.js
│ │
│ ├── middleware/
│ │ ├── auth.js
│ │ ├── errorHandler.js
│ │ └── validateRequest.js
│ │
│ ├── utils/
│ │ └── email.js
│ │
│ ├── uploads/ # static uploaded files
│ └── .env # environment variables
│
├── .gitignore
├── README.md # main project readme (frontend + backend)
└── package.json # optional root script manager



# Tech Stack

| Layer          | Technology                       |
| -------------- | -------------------------------- |
| Frontend       | React.js, React Router, CSS      |
| Backend        | Node.js, Express.js              |
| Database       | MongoDB + Mongoose               |
| Authentication | JSON Web Tokens (JWT)            |
| Email Service  | Nodemailer                       |
| Deployment     | (e.g. Render / Vercel / Railway) |

# Installation & Setup

1. Clone the repository

git clone https://github.com/yourusername/assignment-xperts.git
cd assignment-xperts

2. Install dependencies
Backend

cd server
npm install

3. Frontend

cd ../client
npm install

4. Run the project
Run backend:

cd server
npm run dev

5. Run frontend:

cd client
npm start

Your app will now be running on:

Frontend: http://localhost:3000
Backend: http://localhost:5000

# Deployment

Frontend: Deploy to Vercel or Netlify

Backend: Deploy to Render or Railway

Database: Hosted on MongoDB Atlas

# License

This project is licensed under the MIT License - feel free to use and modify it.
