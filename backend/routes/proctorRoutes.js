const express = require("express");
const router = express.Router();

const {
  ingestEvent,
} = require("../controllers/proctorController");

const {
  authMiddleware,
} = require("../middleware/authMiddleware");

// PROCTOR EVENT ROUTE
router.post("/event", authMiddleware, ingestEvent);

module.exports = router;