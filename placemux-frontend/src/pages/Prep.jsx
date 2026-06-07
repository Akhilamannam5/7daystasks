import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Prep() {
  const token = localStorage.getItem("token");

  const [content, setContent] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await api.getPrepContent(token);
      setContent(res.content || []);
    };

    load();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h2>Prep Content 📚</h2>

      {content.map((item, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ddd",
            padding: 15,
            marginBottom: 10,
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>
            <b>Skill:</b> {item.skill}
          </p>

          {item.url && (
            <a href={item.url} target="_blank">
              Open Resource
            </a>
          )}
        </div>
      ))}
    </div>
  );
}