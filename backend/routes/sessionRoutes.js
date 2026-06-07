const express = require("express");
const router = express.Router();

const {
  startSession,
  getNextQuestion,
  submitAnswer,
} = require("../controllers/sessionController");

const {
  authMiddleware,
} = require("../middleware/authMiddleware");

// START SESSION
router.post("/start", authMiddleware, startSession);

// NEXT QUESTION
router.get("/:id/next", authMiddleware, getNextQuestion);

// SUBMIT ANSWER
router.post("/submit", authMiddleware, submitAnswer);

module.exports = router;