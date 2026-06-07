const slowGuard = (req, res, next) => {
  res.setTimeout(10000, () => {
    res.status(408).json({
      success: false,
      message: "Request timeout",
    });
  });

  next();
};

module.exports = { slowGuard };