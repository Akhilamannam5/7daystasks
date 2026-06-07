const mongoose = require("mongoose");

const prepContentSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    skill: String,
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
    },
    contentType: {
      type: String,
      enum: ["article", "video", "quiz"],
    },
    url: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PrepContent", prepContentSchema);