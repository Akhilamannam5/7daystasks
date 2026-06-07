import { useState, useEffect } from "react";

export default function Result() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult({
      score: 85,
      integrity: "Clean",
    });
  }, []);

  if (!result) return <h3>Loading...</h3>;

  return (
    <div>
      <h1>📊 Result</h1>

      <div className="card">
        <h3>Final Score</h3>
        <h1 style={{ color: "#16a34a", fontSize: 40 }}>
          {result.score}
        </h1>
      </div>

      <div className="card">
        <h3>Integrity Status</h3>
        <p style={{ color: "#2563eb" }}>{result.integrity}</p>
      </div>
    </div>
  );
}