import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    branch: "",
    graduation: "",
    cgpa: "",
    skills: "",
    linkedin: "",
    github: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("profile");

    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const calculateProgress = () => {
    const values = Object.values(profile);
    const filled = values.filter((x) => x !== "").length;
    return Math.round((filled / values.length) * 100);
  };

  const saveProfile = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    alert("Profile Saved Successfully!");

    navigate("/dashboard");
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
      }}
    >
      <div className="card">

        <h1>👤 Student Profile</h1>

        <p
          style={{
            color: "var(--sub)",
          }}
        >
          Complete your profile to unlock
          assessments and job recommendations.
        </p>

        <br />

        <h3>
          Profile Completion : {calculateProgress()}%
        </h3>

        <div
          style={{
            width: "100%",
            height: "12px",
            background: "#ddd",
            borderRadius: "20px",
            marginTop: "10px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              width: calculateProgress() + "%",
              height: "100%",
              background: "#2563eb",
              borderRadius: "20px",
            }}
          />
        </div>

        <h2>👤 Personal Information</h2>

        <br />

        <div className="grid">

          <input
            name="name"
            value={profile.name}
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            name="email"
            value={profile.email}
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            name="phone"
            value={profile.phone}
            placeholder="Phone Number"
            onChange={handleChange}
          />

        </div>

        <br />

        <h2>🎓 Academic Information</h2>

        <br />

        <div className="grid">

          <input
            name="college"
            value={profile.college}
            placeholder="College"
            onChange={handleChange}
          />

          <input
            name="degree"
            value={profile.degree}
            placeholder="Degree"
            onChange={handleChange}
          />

          <input
            name="branch"
            value={profile.branch}
            placeholder="Branch"
            onChange={handleChange}
          />

          <input
            name="graduation"
            value={profile.graduation}
            placeholder="Graduation Year"
            onChange={handleChange}
          />

          <input
            name="cgpa"
            value={profile.cgpa}
            placeholder="CGPA"
            onChange={handleChange}
          />

        </div>

        <br />

        <h2>💻 Skills</h2>

        <br />

        <input
          name="skills"
          value={profile.skills}
          placeholder="Java, Python, React..."
          onChange={handleChange}
        />

        <br />
        <br />

        <h2>🔗 Professional Links</h2>

        <br />

        <div className="grid">

          <input
            name="linkedin"
            value={profile.linkedin}
            placeholder="LinkedIn URL"
            onChange={handleChange}
          />

          <input
            name="github"
            value={profile.github}
            placeholder="GitHub URL"
            onChange={handleChange}
          />

        </div>

        <br />

        <button
          onClick={saveProfile}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "18px",
          }}
        >
          💾 Save Profile
        </button>

      </div>
    </div>
  );
}