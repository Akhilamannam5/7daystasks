const Session = require("../models/AssessmentSession");

// START SESSION
const startSession = async (req, res) => {
  const session = await Session.create({
    userId: req.user.id,
    status: "in_progress",
    currentIndex: 0,
  });

  res.json({
    success: true,
    sessionId: session._id,
  });
};

// GET NEXT QUESTION (TEMP MOCK)
const getNextQuestion = async (req, res) => {
  res.json({
    success: true,
    question: {
      id: "q1",
      question: "2 + 2 ?",
      options: ["3", "4", "5"],
    },
    index: 0,
  });
};

// SUBMIT ANSWER
const submitAnswer = async (req, res) => {
  res.json({
    success: true,
    message: "answer saved",
  });
};

module.exports = {
  startSession,
  getNextQuestion,
  submitAnswer,
};