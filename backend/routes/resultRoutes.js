const express = require("express");
const router = express.Router();

const {
  finalizeResult,
  getResult,
} = require("../controllers/resultController");

const { authMiddleware } = require("../middleware/authMiddleware");

// FINALIZE RESULT
router.post("/finalize", authMiddleware, finalizeResult);

// GET RESULT
router.get("/:id", authMiddleware, getResult);

module.exports = router;