import { useEffect, useState } from "react";
import GlassCard from "../components/GlassCard";

export default function Passport() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData({
      overallScore: 87,
      skills: [
        { skill: "React", score: 90 },
        { skill: "Node.js", score: 80 },
        { skill: "DSA", score: 85 },
      ],
    });
  }, []);

  if (!data) return <h3>Loading...</h3>;

  return (
    <div>
      <h1>🧠 Skill Passport</h1>

      <GlassCard>
        <h3>Overall Score</h3>
        <h1 style={{ color: "var(--primary)", fontSize: 40 }}>
          {data.overallScore}
        </h1>
      </GlassCard>

      {data.skills.map((s, i) => (
        <GlassCard key={i}>
          <h3>{s.skill}</h3>
          <p>Score: {s.score}</p>
        </GlassCard>
      ))}
    </div>
  );
}