const users = {}; // demo DB

export const register = (req, res) => {
  const { name, email, password } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);

  users[email] = {
    name,
    email,
    password,
    otp,
    verified: false,
  };

  return res.json({
    success: true,
    message: "OTP generated",
    otp,
  });
};

export const verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  const user = users[email];

  if (!user) {
    return res.json({ success: false, message: "User not found" });
  }

  if (String(user.otp) !== String(otp)) {
    return res.json({ success: false, message: "Invalid OTP" });
  }

  user.verified = true;

  const token = "token_" + Date.now();

  return res.json({
    success: true,
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
};

// ✅ ADD THIS (FIXES YOUR ERROR)
export const login = (req, res) => {
  const { email, password } = req.body;

  const user = users[email];

  if (!user || user.password !== password) {
    return res.json({ success: false, message: "Invalid credentials" });
  }

  return res.json({
    success: true,
    token: "token_" + Date.now(),
    user,
  });
};

// ✅ ADD THIS (ADMIN DUMMY)
export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "admin") {
    return res.json({
      success: true,
      token: "admin_token_" + Date.now(),
    });
  }

  return res.json({ success: false, message: "Invalid admin login" });
};

// ✅ ADD THIS (DUMMY LIST)
export const getStudents = (req, res) => {
  const list = Object.values(users);
  return res.json({ success: true, students: list });
};