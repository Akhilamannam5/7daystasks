import { useEffect, useState } from "react";
import useProctoring from "../hooks/useProctoring";

const QUESTIONS = [
  {
    id: 1,
    question: "What is 2 + 2?",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "React is a...",
    options: ["Framework", "Library", "Database", "Language"],
  },
];

export default function ExamRunner() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(120);
  const [submitted, setSubmitted] = useState(false);

  // ✅ PROCTORING HOOK
  const { videoRef, status, events } = useProctoring();

  const current = QUESTIONS[index];

  // TIMER
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // FULLSCREEN
  useEffect(() => {
    const enterFullScreen = async () => {
      try {
        await document.documentElement.requestFullscreen();
      } catch (err) {
        console.log("Fullscreen blocked");
      }
    };

    enterFullScreen();
  }, []);

  const selectOption = (option) => {
    setAnswers({
      ...answers,
      [current.id]: option,
    });
  };

  const nextQuestion = () => {
    if (index < QUESTIONS.length - 1) setIndex(index + 1);
  };

  const previousQuestion = () => {
    if (index > 0) setIndex(index - 1);
  };

  const submitExam = () => {
    setSubmitted(true);

    console.log("Final Answers:", answers);
    console.log("Proctor Logs:", events);

    const logs = JSON.parse(localStorage.getItem("proctor_logs")) || [];
    console.log("Stored Logs:", logs);
  };

  // ================= SUBMITTED PAGE =================
  if (submitted) {
    return (
      <div className="card" style={{ maxWidth: 700, margin: "40px auto", textAlign: "center" }}>
        <h1>Assessment Submitted ✅</h1>

        <h2 style={{ color: "#f59e0b" }}>🟡 Under Review</h2>

        <p>Your exam has been submitted successfully.</p>

        <div style={{ textAlign: "left", marginTop: 20 }}>
          <h3>What happens next?</h3>
          <ul>
            <li>✔ Answers sent to admin</li>
            <li>✔ AI proctor logs attached</li>
            <li>✔ Manual evaluation</li>
            <li>✔ Results published later</li>
          </ul>
        </div>

        <button
          onClick={() => (window.location.href = "/dashboard")}
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  // ================= MAIN EXAM =================
  return (
    <div className="card" style={{ maxWidth: 900, margin: "20px auto" }}>
      
      <h1>Online Assessment</h1>

      <h3>Time Left: {timeLeft}s</h3>

      <hr />

      {/* PROCTOR CAMERA (IMPORTANT FIX) */}
      <div style={{ marginBottom: 20 }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={{
            width: "100%",
            borderRadius: 12,
            border: "2px solid var(--border)",
          }}
        />
        <p>Status: {status}</p>
      </div>

      <hr />

      <h2>
        Question {index + 1} of {QUESTIONS.length}
      </h2>

      <h3>{current.question}</h3>

      {current.options.map((option) => (
        <label key={option} style={{ display: "block", margin: "8px 0" }}>
          <input
            type="radio"
            checked={answers[current.id] === option}
            onChange={() => selectOption(option)}
          />{" "}
          {option}
        </label>
      ))}

      <br />

      <button onClick={previousQuestion} disabled={index === 0}>
        Previous
      </button>

      <button onClick={nextQuestion} disabled={index === QUESTIONS.length - 1}>
        Next
      </button>

      <button style={{ background: "red", color: "white" }} onClick={submitExam}>
        Submit Exam
      </button>

    </div>
  );
}