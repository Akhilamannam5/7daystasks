const rateMap = new Map();

const rateLimit = (req, res, next) => {
  const ip = req.ip;

  const now = Date.now();
  const windowTime = 60 * 1000;

  if (!rateMap.has(ip)) {
    rateMap.set(ip, []);
  }

  const timestamps = rateMap.get(ip).filter((t) => now - t < windowTime);

  if (timestamps.length > 20) {
    return res.json({ success: false, message: "Too many requests" });
  }

  timestamps.push(now);
  rateMap.set(ip, timestamps);

  next();
};

module.exports = rateLimit;