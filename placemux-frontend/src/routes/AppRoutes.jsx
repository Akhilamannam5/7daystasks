import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Authentication
import Register from "../pages/Register";
import Login from "../pages/Login";
import OTP from "../pages/OTP";
import Profile from "../pages/Profile";

// Dashboard Layout
import DashboardLayout from "../Layouts/DashboardLayout";

// Student Pages
import Dashboard from "../pages/Dashboard";
import Exam from "../pages/Exam";
import ExamRunner from "../pages/ExamRunner";
import Result from "../pages/Result";
import Passport from "../pages/Passport";
import Prep from "../pages/Prep";
import Jobs from "../pages/Jobs";

// Admin
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import AdminStudents from "../pages/AdminStudents";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={<Navigate to="/register" replace />}
        />

        {/* Student Authentication */}

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/otp"
          element={<OTP />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Admin Authentication */}

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* Student Dashboard */}

        <Route element={<DashboardLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/exam"
            element={<Exam />}
          />

          <Route
            path="/exam-runner"
            element={<ExamRunner />}
          />

          <Route
            path="/results"
            element={<Result />}
          />

          <Route
            path="/passport"
            element={<Passport />}
          />

          <Route
            path="/prep"
            element={<Prep />}
          />

          <Route
            path="/jobs"
            element={<Jobs />}
          />

        </Route>

        {/* Admin */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/students"
          element={<AdminStudents />}
        />

        {/* Invalid */}

        <Route
          path="*"
          element={<Navigate to="/register" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;