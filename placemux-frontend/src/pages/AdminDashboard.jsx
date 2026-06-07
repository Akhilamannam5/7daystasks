import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Students",
      icon: "👨‍🎓",
      value: "Manage",
      route: "/admin/students",
    },
    {
      title: "Pending Exams",
      icon: "📝",
      value: "0",
      route: "/admin/pending",
    },
    {
      title: "Results",
      icon: "📊",
      value: "0",
      route: "/admin/results",
    },
    {
      title: "Jobs",
      icon: "💼",
      value: "0",
      route: "/admin/jobs",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>

      <div className="card">
        <h1>Admin Dashboard</h1>

        <p style={{ color: "#666" }}>
          Manage students, exams, results and platform activity.
        </p>
      </div>

      <br />

      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{
              cursor: "pointer",
            }}
            onClick={() => navigate(card.route)}
          >
            <h1>{card.icon}</h1>

            <h2>{card.title}</h2>

            <p>{card.value}</p>
          </div>
        ))}
      </div>

      <br />

      <div className="card">
        <h2>Platform Overview</h2>

        <br />

        <p>✅ Student Registration Active</p>

        <p>✅ Admin Portal Active</p>

        <p>📝 Exam Review Module Coming Soon</p>

        <p>📊 Result Publishing Coming Soon</p>
      </div>

      <br />

      <div className="card">
        <h2>Pending Reviews</h2>

        <br />

        <p>No pending exam submissions.</p>
      </div>

    </div>
  );
}