[dddddddddd.txt](https://github.com/user-attachments/files/23356750/dddddddddd.txt)# 🎓 Assignment Xperts

> **Assignment Xperts** is a full-stack MERN (MongoDB, Express, React, Node.js) web platform designed to simplify **assignment help**, **academic service bookings**, and **student support** — all in one place.

It provides a **modern, responsive UI** for students to explore services, book assistance, and stay connected, backed by a **secure Node.js + Express API** and a **MongoDB** database.

---

## 🚀 Features

### 🎨 Frontend (React.js)
- Fully **responsive and modern UI**
- Pages: **Home**, **Services**, **Pricing**, **Contact**, **Login**, **Booking**
- Smooth **routing and navigation** with React Router
- Integrated **login and booking** workflows
- **Form validation** for secure and clean user inputs
- Modular and **reusable components** with clean CSS styling

### ⚙️ Backend (Node.js + Express + MongoDB)
- **RESTful API architecture**
- **JWT-based authentication** (Login / Register)
- Secure password encryption using **bcrypt**
- CRUD operations for:
  - 🧾 Services
  - 📅 Bookings
  - 💬 Testimonials
  - 📧 Contact Forms
- Automated email notifications via **Nodemailer**
- Centralized **error handling** and **validation middleware**


## 🧩 Project Structure
[Uploadinassignment-xperts/
�


+-- client/ # React Frontend
� +-- public/
� � +-- index.html
� � +-- favicon.ico
� �
� +-- src/
� � +-- assets/ # images, icons, logos
� � +-- components/
� � � +-- Navbar/
� � � +-- Footer/
� � � +-- Forms/
� � � +-- Shared/
� � �
� � +-- pages/
� � � +-- Home.jsx
� � � +-- Services.jsx
� � � +-- Pricing.jsx
� � � +-- Contact.jsx
� � � +-- Login.jsx
� � � +-- Booking.jsx
� � � +-- NotFound.jsx
� � �
� � +-- App.js
� � +-- index.js
� � +-- App.css
� �
� +-- package.json
� +-- .env.example # optional sample env for frontend APIs
� +-- README.md
�
+-- server/ # Node + Express Backend
� +-- server.js # entry point
� +-- package.json
� �
� +-- config/
� � +-- db.js # MongoDB connection setup
� �
� +-- controllers/
� � +-- authController.js
� � +-- bookingController.js
� � +-- contactController.js
� � +-- serviceController.js
� � +-- testimonialController.js
� � +-- paymentController.js
� �
� +-- models/
� � +-- User.model.js
� � +-- Service.model.js
� � +-- Booking.model.js
� � +-- Contact.model.js
� � +-- Testimonial.model.js
� �
� +-- routes/
� � +-- authRoutes.js
� � +-- bookingRoutes.js
� � +-- contactRoutes.js
� � +-- serviceRoutes.js
� � +-- testimonialRoutes.js
� � +-- paymentRoutes.js
� �
� +-- middleware/
� � +-- auth.js
� � +-- errorHandler.js
� � +-- validateRequest.js
� �
� +-- utils/
� � +-- email.js
� �
� +-- uploads/ # static uploaded files
� +-- .env # environment variables
�
+-- .gitignore
+-- README.md # main project readme (frontend + backend)
+-- package.json # optional root script managerg dddddddddd.txt…]()



