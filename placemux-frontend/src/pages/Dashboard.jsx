import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  // Load user
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, [navigate]);

  // logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("tempEmail");

    navigate("/login");
  };

  // FIXED PROFILE COMPLETION
  const requiredFields = ["name", "email", "college", "phone", "skills"];

  const filled = requiredFields.filter(
    (key) => user?.[key] && user[key].toString().trim() !== ""
  ).length;

  const completion = Math.min(
    Math.round((filled / requiredFields.length) * 100),
    100
  );

  // JOBS DATA
  const jobs = [
    {
      title: "Frontend Developer",
      desc: "React + UI Development role",
      salary: "₹4 - ₹8 LPA",
      skills: "React, JS, HTML",
      exp: "0-2 yrs",
    },
    {
      title: "Backend Developer",
      desc: "Node.js API Development",
      salary: "₹5 - ₹10 LPA",
      skills: "Node.js, Express, MongoDB",
      exp: "1-3 yrs",
    },
    {
      title: "Full Stack Developer",
      desc: "Frontend + Backend role",
      salary: "₹6 - ₹12 LPA",
      skills: "React, Node.js, MongoDB",
      exp: "1-4 yrs",
    },
  ];

  const applyJob = (job) => {
    alert(`Applied for ${job}`);
  };

  return (
    <div className="dashboard">

      {/* TOP BAR */}
      <div className="card top-bar">
        <h2>Dashboard</h2>

        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => navigate("/profile")}>
            Profile
          </button>

          <button
            onClick={logout}
            style={{
              background: "red",
              color: "white",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* PROFILE COMPLETION */}
      <div className="card profile-banner">
        <div className="banner-header">
          <div>
            <h2>🎯 Profile Completion</h2>
            <p style={{ color: "var(--sub)" }}>
              Complete your profile to unlock jobs & exams
            </p>
          </div>

          <h2>{completion}%</h2>
        </div>

        <div className="progress">
          <div style={{ width: completion + "%" }}></div>
        </div>
      </div>

      {/* WELCOME */}
      <div className="card">
        <h1>Welcome {user?.name || "Student"} 👋</h1>
        <p style={{ color: "var(--sub)" }}>
          Keep improving your profile to get hired faster
        </p>
      </div>

      {/* STATS */}
      <div className="stats-row">

        <div className="card stat-card" onClick={() => navigate("/exam")}>
          <h3>📝 Assessments</h3>
          <h2>0</h2>
        </div>

        <div className="card stat-card" onClick={() => navigate("/passport")}>
          <h3>🪪 Skills</h3>
          <h2>0</h2>
        </div>

        <div className="card stat-card" onClick={() => navigate("/results")}>
          <h3>📊 Score</h3>
          <h2>--</h2>
        </div>

        <div className="card stat-card" onClick={() => navigate("/prep")}>
          <h3>📚 Prep</h3>
          <h2>0%</h2>
        </div>

      </div>

      {/* MAIN GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: 20,
      }}>

        {/* EXAM SECTION */}
        <div className="card">
          <h2>📝 Upcoming Assessment</h2>

          <p>Aptitude + Technical Test</p>
          <p>Duration: 60 minutes</p>

          <button onClick={() => navigate("/exam")}>
            Start Assessment
          </button>
        </div>

        {/* PROFILE CARD */}
        <div className="card">
          <h2>👤 Profile</h2>

          <div style={{ marginTop: 10 }}>
            <p><b>Name:</b> {user?.name || "Not set"}</p>
            <p><b>Email:</b> {user?.email || "Not set"}</p>
            <p><b>College:</b> {user?.college || "Not set"}</p>
          </div>

          <br />

          <button onClick={() => navigate("/profile")}>
            Edit Profile
          </button>
        </div>

      </div>

      {/* JOBS */}
      <div className="card section">
        <h2>💼 Recommended Jobs</h2>

        <div className="job-list">

          {jobs.map((job, i) => (
            <div key={i} className="job-card">

              <div className="job-info">
                <h3>{job.title}</h3>
                <p className="job-desc">{job.desc}</p>

                <p><b>💰</b> {job.salary}</p>
                <p><b>🧠</b> {job.skills}</p>
                <p><b>⏳</b> {job.exp}</p>
              </div>

              <button
                className="apply-btn"
                onClick={() => applyJob(job.title)}
              >
                Apply
              </button>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}