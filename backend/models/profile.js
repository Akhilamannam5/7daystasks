const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: String,
  score: { type: Number, default: 0 },
});

const profileSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    fullName: String,
    college: String,
    branch: String,
    year: Number,

    skills: [skillSchema],

    skillPassport: {
      overallScore: { type: Number, default: 0 },
      level: { type: String, default: "beginner" },
    },

    verificationStatus: {
      type: String,
      enum: ["unverified", "pending", "verified"],
      default: "unverified",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);