import { useNavigate } from "react-router-dom";

export default function Exam() {
  const navigate = useNavigate();

  return (
    <div className="card" style={{ maxWidth: 600, margin: "40px auto", textAlign: "center" }}>
      
      <h1>🧠 Online Assessment</h1>

      <p style={{ color: "var(--sub)" }}>
        This exam is AI-proctored and monitored
      </p>

      <br />

      <div className="card" style={{ background: "var(--bg)" }}>
        <h3>⚠ Rules</h3>
        <ul style={{ textAlign: "left" }}>
          <li>No tab switching allowed</li>
          <li>Camera must remain ON</li>
          <li>Full screen is required</li>
          <li>Any violation is logged</li>
        </ul>
      </div>

      <br />

      <button
        onClick={() => navigate("/exam-runner")}
        style={{ width: "100%" }}
      >
        Start Proctored Exam
      </button>

    </div>
  );
}