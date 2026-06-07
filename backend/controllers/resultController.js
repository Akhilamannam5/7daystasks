const Session = require("../models/AssessmentSession");

// ==========================
// FINALIZE SESSION RESULT
// ==========================
const finalizeResult = async (req, res) => {
  try {
    const { sessionId } = req.body;

    const session = await Session.findById(sessionId);

    if (!session) {
      return res.json({
        success: false,
        message: "Session not found",
      });
    }

    // SIMPLE SCORING LOGIC (stub for AI)
    const correct = session.answers.filter((a) => a.score > 0).length;

    const theta = correct * 0.8;
    const scaled = correct * 10;
    const sem = 5;

    session.score = {
      theta,
      scaled,
      sem,
    };

    // Integrity (stub AI score)
    session.integrity = {
      score: 92,
      report: {
        tabSwitches: session.proctorEvents.filter(
          (e) => e.type === "TAB_SWITCH"
        ).length,
        pasteEvents: session.proctorEvents.filter(
          (e) => e.type === "PASTE"
        ).length,
      },
    };

    session.resultStatus = "completed";

    await session.save();

    res.json({
      success: true,
      score: session.score,
      integrity: session.integrity,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ==========================
// GET RESULT
// ==========================
const getResult = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    res.json({
      success: true,
      score: session.score,
      integrity: session.integrity,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  finalizeResult,
  getResult,
};