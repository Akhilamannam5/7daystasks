import { useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  const navigate = useNavigate();
  const email = localStorage.getItem("tempEmail");

  // TIMER
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const verify = async () => {
    const res = await api.verifyOtp({ email, otp });

    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Verified successfully");

      navigate("/dashboard");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="otp-overlay">
      <div className="otp-box card">

        <h2>OTP Verification</h2>

        <p>Sent to: {email}</p>

        <h3 style={{ color: "red" }}>
          ⏳ {timer}s
        </h3>

        <input
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button onClick={verify}>
          Verify OTP
        </button>

      </div>
    </div>
  );
}