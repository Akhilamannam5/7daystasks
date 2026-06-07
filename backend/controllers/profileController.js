const Profile = require("../models/Profile");

// CREATE / UPDATE PROFILE
const upsertProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await Profile.findOneAndUpdate(
      { userId },
      { ...req.body, userId },
      { new: true, upsert: true }
    );

    res.json({ success: true, profile });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET PROFILE
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.id });

    res.json({ success: true, profile });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

module.exports = {
  upsertProfile,
  getProfile,
};