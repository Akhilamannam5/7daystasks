const SkillPassport = require("../models/SkillPassport");
const Session = require("../models/AssessmentSession");

// ==========================
// BUILD PASSPORT FROM SCORE
// ==========================
const generatePassport = async (req, res) => {
  try {
    const { userId } = req.body;

    const sessions = await Session.find({ userId, resultStatus: "completed" });

    let totalScore = 0;
    let skills = [];

    sessions.forEach((s) => {
      totalScore += s.score?.scaled || 0;

      skills.push({
        skill: "General Aptitude",
        score: s.score?.scaled || 0,
        level:
          s.score?.scaled > 80
            ? "advanced"
            : s.score?.scaled > 50
            ? "intermediate"
            : "beginner",
      });
    });

    const passport = await SkillPassport.findOneAndUpdate(
      { userId },
      {
        userId,
        skills,
        overallScore: totalScore,
        lastUpdated: new Date(),
      },
      { upsert: true, new: true }
    );

    res.json({ success: true, passport });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ==========================
// GET PASSPORT
// ==========================
const getPassport = async (req, res) => {
  try {
    const passport = await SkillPassport.findOne({
      userId: req.params.userId,
    });

    res.json({ success: true, passport });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  generatePassport,
  getPassport,
};