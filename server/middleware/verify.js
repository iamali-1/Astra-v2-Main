const errorHandler = require("./errorHandler");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // console.log(req.headers, "from middleware");
  const token = req.headers.cookies;
  if (!token) return next(errorHandler(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden"));

    console.log(user);
    req.user = user;
    next();
  });
};

module.exports = {
  verifyToken,
};
