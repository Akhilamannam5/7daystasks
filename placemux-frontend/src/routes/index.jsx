import { Routes, Route } from "react-router-dom";

// AUTH
import Login from "../pages/Login";
import Otp from "../pages/Otp";
import Consent from "../pages/Consent";

// CORE PAGES
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

// DAY 4
import AssessmentRunner from "../pages/AssessmentRunner";

/**
 * ROUTES CONFIG
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* =========================
          PUBLIC ROUTES
      ========================= */}
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />

      {/* =========================
          PROTECTED FLOW (basic)
      ========================= */}
      <Route path="/consent" element={<Consent />} />

      {/* =========================
          CORE APP
      ========================= */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />

      {/* =========================
          DAY 4 ASSESSMENT ENGINE
      ========================= */}
      <Route path="/exam" element={<AssessmentRunner />} />
    </Routes>
  );
}