import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/admin-login",
        data
      );

      if (res.data.success) {
        localStorage.setItem(
          "token",
          res.data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user)
        );

        navigate("/admin");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <div className="auth-container">
      <div className="card">

        <h1>Admin Login</h1>

        <br />

        <form onSubmit={login}>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />

          <br />
          <br />

          <button>
            Login
          </button>

        </form>

      </div>
    </div>
  );
}