const auditLogger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const log = {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      user: req.user?.id || "guest",
      time: Date.now() - start + "ms",
      timestamp: new Date().toISOString(),
    };

    console.log("📊 AUDIT LOG:", log);
  });

  next();
};

module.exports = { auditLogger };