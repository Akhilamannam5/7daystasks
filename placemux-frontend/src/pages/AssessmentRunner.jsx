import { useEffect, useState, useRef } from "react";
import { api } from "../services/api";

export default function AssessmentRunner() {
  const token = localStorage.getItem("token");

  const [sessionId, setSessionId] = useState(
    localStorage.getItem("sessionId") || null
  );

  const [question, setQuestion] = useState(null);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  const startTime = useRef(Date.now());

  // ================= START SESSION =================
  const startExam = async () => {
    const res = await api.startSession(token);

    if (res.success) {
      localStorage.setItem("sessionId", res.sessionId);
      setSessionId(res.sessionId);
      loadQuestion(res.sessionId);
    }
  };

  // ================= LOAD QUESTION =================
  const loadQuestion = async (sid) => {
    const res = await api.getNextQuestion(token, sid);

    if (res.success && res.question) {
      setQuestion(res.question);
      setIndex(res.index);
      startTime.current = Date.now();
    } else {
      setFinished(true);
    }
  };

  // ================= SUBMIT ANSWER =================
  const submit = async () => {
    setLoading(true);

    const timeTaken = Date.now() - startTime.current;

    const res = await api.submitAnswer(token, {
      sessionId,
      questionId: question.id,
      answer,
      timeTaken,
    });

    setLoading(false);

    if (res.success) {
      setAnswer("");
      loadQuestion(sessionId);
    }
  };

  // ================= PROCTORING EVENTS =================
  const sendEvent = async (type, meta = {}) => {
    if (!sessionId) return;

    try {
      await api.sendProctorEvent(token, {
        sessionId,
        type,
        meta,
      });
    } catch (err) {
      console.log("Proctor error:", err);
    }
  };

  useEffect(() => {
    const blur = () => sendEvent("TAB_SWITCH");
    const focus = () => sendEvent("TAB_FOCUS");

    window.addEventListener("blur", blur);
    window.addEventListener("focus", focus);

    return () => {
      window.removeEventListener("blur", blur);
      window.removeEventListener("focus", focus);
    };
  }, [sessionId]);

  useEffect(() => {
    const paste = () => sendEvent("PASTE");

    window.addEventListener("paste", paste);

    return () => window.removeEventListener("paste", paste);
  }, [sessionId]);

  useEffect(() => {
    const fs = () => {
      if (!document.fullscreenElement) {
        sendEvent("FULLSCREEN_EXIT");
      }
    };

    document.addEventListener("fullscreenchange", fs);

    return () =>
      document.removeEventListener("fullscreenchange", fs);
  }, [sessionId]);

  // ================= UI =================
  if (!sessionId) {
    return (
      <div style={{ padding: 30 }}>
        <h2>Assessment Ready</h2>
        <button onClick={startExam}>Start Exam</button>
      </div>
    );
  }

  if (finished) {
    return (
      <div style={{ padding: 30 }}>
        <h2>Exam Completed 🎉</h2>
        <p>Redirecting to results...</p>
      </div>
    );
  }

  if (!question) {
    return <h3>Loading question...</h3>;
  }

  return (
    <div style={{ padding: 30 }}>
      <h2>Assessment Runner</h2>

      <h4>Question {index + 1}</h4>

      <p><b>{question.question}</b></p>

      {question.options?.map((opt, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              name="answer"
              value={opt}
              checked={answer === opt}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {opt}
          </label>
        </div>
      ))}

      <br />

      <button onClick={submit} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}