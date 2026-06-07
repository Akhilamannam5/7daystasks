const PrepContent = require("../models/PrepContent");

// GET ALL CONTENT
const getPrepContent = async (req, res) => {
  try {
    const content = await PrepContent.find();
    res.json({ success: true, content });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ADD CONTENT (ADMIN USE)
const addPrepContent = async (req, res) => {
  try {
    const newContent = await PrepContent.create(req.body);
    res.json({ success: true, data: newContent });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  getPrepContent,
  addPrepContent,
};