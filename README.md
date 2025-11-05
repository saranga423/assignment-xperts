# 🎓 Assignment Xperts

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

## 💻 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, React Router, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB + Mongoose |
| **Authentication** | JSON Web Tokens (JWT) |
| **Email Service** | Nodemailer |
| **Deployment** | Render / Railway / Vercel / Netlify |

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/assignment-xperts.git
cd assignment-xperts
```

2️⃣ Install Dependencies

Backend

cd server
npm install


Frontend

cd ../client
npm install

3️⃣ Set Up Environment Variables
server/.env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/assignmentxperts
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

client/.env
REACT_APP_API_URL=http://localhost:5000/api

▶️ Running the Application

Start Backend:

cd server
npm run dev

Start Frontend:

cd client
npm start

🌍 Deployment


| Component    | Platform         | Notes                             |
| ------------ | ---------------- | --------------------------------- |
| **Frontend** | Vercel / Netlify | Auto-deploy from `client/` folder |
| **Backend**  | Render / Railway | Deploy from `server/` folder      |
| **Database** | MongoDB Atlas    | Cloud-hosted                      |

## 🏷️ Tech & Project Badges

![React](https://img.shields.io/badge/Frontend-React.js-61DBFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/API-Express.js-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-4EA94B?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-blueviolet?logo=jsonwebtokens&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Email-Nodemailer-yellowgreen?logo=gmail&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-In_Development-orange)
![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red)









