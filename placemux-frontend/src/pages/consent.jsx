import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Consent() {
  const navigate = useNavigate();

  const handleConsent = async () => {
    const token = localStorage.getItem("token");

    const res = await api.consent(token);

    if (res.success) {
      navigate("/dashboard");
    } else {
      alert("Consent failed");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Consent Page</h2>

      <p>We need your consent to continue using platform features.</p>

      <button onClick={handleConsent}>
        I Agree
      </button>
    </div>
  );
}