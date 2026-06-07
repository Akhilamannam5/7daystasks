const express = require("express");
const router = express.Router();

const {
  generatePassport,
  getPassport,
} = require("../controllers/passportController");

// build passport
router.post("/generate", generatePassport);

// fetch passport
router.get("/:userId", getPassport);

module.exports = router;