# 🚀 Placemux - 7 Day Tasks (Full Stack Project)

A full-stack web application for student assessment, AI proctoring exams, profile tracking, and job recommendations.

---

## 📁 Project Structure
- backend/ → Node.js + Express API
- placemux-frontend/ → React (Vite) frontend

---

## ✨ Features
✔ User Registration + OTP Verification  
✔ Login / Logout system  
✔ Student Dashboard with profile completion  
✔ Online proctored exams (webcam + tab switch detection)  
✔ Exam timer + auto submit  
✔ Job listings with apply button (salary, skills, experience)  
✔ Admin panel (students list)

---

## 🛠 Tech Stack
Frontend: React, Vite, Axios, CSS  
Backend: Node.js, Express.js, CORS  
AI Proctoring: TensorFlow.js (BlazeFace)

---

## 🚀 Run Project

### 1. Clone Repo
```bash
git clone https://github.com/YOUR_USERNAME/7daystasks.git
### 2. Backend
cd backend
npm install
npm start

Runs on: http://localhost:5000

### 3. Frontend
cd placemux-frontend
npm install
npm run dev

Runs on: http://localhost:5173

🔐 API Endpoints
POST /register
POST /verify-otp
POST /login
POST /admin-login
GET /students
⚠ Notes
OTP is demo-based (shown in backend response)
No database (uses in-memory storage)
For production use MongoDB + JWT
