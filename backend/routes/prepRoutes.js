const express = require("express");
const router = express.Router();

const {
  getPrepContent,
  addPrepContent,
} = require("../controllers/prepController");

router.get("/", getPrepContent);
router.post("/", addPrepContent);

module.exports = router;