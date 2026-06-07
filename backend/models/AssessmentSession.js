const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
  {
    questionId: String,
    answer: String,
    timeTaken: Number,
    score: { type: Number, default: 0 },
  },
  { _id: false }
);

const proctorEventSchema = new mongoose.Schema(
  {
    type: String,
    timestamp: Number,
    meta: Object,
  },
  { _id: false }
);

const sessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["created", "in_progress", "completed"],
      default: "created",
    },

    currentIndex: {
      type: Number,
      default: 0,
    },

    answers: [answerSchema],
    proctorEvents: [proctorEventSchema],

    // =========================
    // DAY 5 ADDITIONS
    // =========================
    score: {
      theta: { type: Number, default: 0 },
      scaled: { type: Number, default: 0 },
      sem: { type: Number, default: 0 },
    },

    integrity: {
      score: { type: Number, default: 100 },
      report: { type: Object, default: {} },
    },

    resultStatus: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AssessmentSession", sessionSchema);