const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  skill: String,
  score: Number,
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
});

const passportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    skills: [skillSchema],

    overallScore: {
      type: Number,
      default: 0,
    },

    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SkillPassport", passportSchema);