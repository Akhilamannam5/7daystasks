import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ✅ THIS IS THE FUNCTION YOU WERE MISSING/CONFUSED ABOUT
  const handleRegister = async () => {
    try {
      console.log("REGISTER CLICKED", data);

      if (!data.name || !data.email || !data.password) {
        alert("Fill all fields");
        return;
      }

      const res = await api.register(data);

      console.log("RESPONSE:", res.data);

      if (res.data.success) {
        alert("Your OTP is: " + res.data.otp);

        localStorage.setItem("tempEmail", data.email);

        navigate("/otp");
      } else {
        alert(res.data.message || "Registration failed");
      }
    } catch (err) {
      console.log("ERROR:", err);
      alert("Backend not responding");
    }
  };

  return (
    <div className="card">
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) =>
          setData({ ...data, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />

      {/* ✅ THIS CONNECTS BUTTON TO FUNCTION */}
      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}