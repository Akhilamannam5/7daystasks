import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={styles.wrapper}>

      {/* LEFT SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={{ marginBottom: 20 }}>Student Panel</h2>

        <NavLink to="/dashboard" style={styles.link}>🏠 Dashboard</NavLink>
        <NavLink to="/exam" style={styles.link}>📝 Exam</NavLink>
        <NavLink to="/passport" style={styles.link}>🪪 Passport</NavLink>
        <NavLink to="/prep" style={styles.link}>📚 Prep</NavLink>
        <NavLink to="/jobs" style={styles.link}>💼 Jobs</NavLink>
        <NavLink to="/results" style={styles.link}>📊 Results</NavLink>
      </div>

      {/* RIGHT CONTENT */}
      <div style={styles.main}>
        <Outlet />
      </div>

    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
  },

  sidebar: {
    width: "240px",
    background: "var(--sidebar)",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
    display: "block",
  },

  main: {
    flex: 1,
    padding: "20px",
    background: "var(--bg)",
  },
};