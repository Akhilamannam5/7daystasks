import express from "express";

import {
  register,
  login,
  verifyOtp,
  adminLogin,
  getStudents,
} from "../controllers/authController.js";

const router = express.Router();

// Student Authentication
router.post("/register", register);
router.post("/login", login);
router.post("/verify-otp", verifyOtp);

// Admin Authentication
router.post("/admin-login", adminLogin);

// Admin - Student Management
router.get("/students", getStudents);

export default router;