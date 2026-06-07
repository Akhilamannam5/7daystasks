const express = require("express");
const router = express.Router();

const {
  upsertProfile,
  getProfile,
} = require("../controllers/profileController");

const {
  authMiddleware,
} = require("../middleware/authMiddleware");

// =========================
// PROFILE ROUTES
// =========================

// CREATE / UPDATE PROFILE
router.post("/", authMiddleware, upsertProfile);

// GET PROFILE
router.get("/", authMiddleware, getProfile);

module.exports = router;