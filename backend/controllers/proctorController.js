const Session = require("../models/AssessmentSession");

// INGEST PROCTOR EVENT
const ingestEvent = async (req, res) => {
  try {
    const { sessionId, type, meta } = req.body;

    const session = await Session.findById(sessionId);

    if (!session) {
      return res.json({
        success: false,
        message: "Session not found",
      });
    }

    session.proctorEvents.push({
      type,
      timestamp: Date.now(),
      meta,
    });

    await session.save();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  ingestEvent,
};