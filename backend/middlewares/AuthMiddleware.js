const jwt = require("jsonwebtoken");
const SECRET_KEY = "@123498765@";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers && req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing or invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
     req.userId = decoded.userId; // set the user info from token to req.user
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authenticateToken;
