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

### ⚙️ Core Tech Stack
![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/API-Express.js-black?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Email-Nodemailer-yellowgreen?logo=gmail&logoColor=white)


### 🛠️ Development & Tools
![Git](https://img.shields.io/badge/Version%20Control-Git-F05032?logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/Hosted_on-GitHub-181717?logo=github)
![VS Code](https://img.shields.io/badge/Editor-VSCode-0078D4?logo=visual-studio-code)
![Postman](https://img.shields.io/badge/API%20Testing-Postman-FF6C37?logo=postman)
![Render](https://img.shields.io/badge/Backend%20Hosting-Render-46E3B7?logo=render)
![Vercel](https://img.shields.io/badge/Frontend%20Hosting-Vercel-000000?logo=vercel)
![Railway](https://img.shields.io/badge/Alternative-Railway-0B0D0E?logo=railway)
![MongoDB Atlas](https://img.shields.io/badge/DB%20Host-MongoDB%20Atlas-4DB33D?logo=mongodb)


### 🚀 Status & Version
![Status](https://img.shields.io/badge/Status-Active%20Development-orange)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![Build](https://img.shields.io/badge/Build-Passing-success)
![Maintenance](https://img.shields.io/badge/Maintained%3F-Yes-brightgreen)


### 📊 GitHub Stats
![Stars](https://img.shields.io/github/stars/yourusername/assignment-xperts?style=social)
![Forks](https://img.shields.io/github/forks/yourusername/assignment-xperts?style=social)
![Contributors](https://img.shields.io/github/contributors/yourusername/assignment-xperts)
![Issues](https://img.shields.io/github/issues/yourusername/assignment-xperts)
![Pull Requests](https://img.shields.io/github/issues-pr/yourusername/assignment-xperts)


### ❤️ License & Community
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)
