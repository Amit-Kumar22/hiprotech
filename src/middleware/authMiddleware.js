const jwt = require('jsonwebtoken');

// Example: token blacklist can be managed in-memory or in DB
const tokenBlacklist = new Set();

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if(!authHeader) return res.status(401).json({ message: 'Authorization header missing' });

  const token = authHeader.split(' ')[1];
  if(!token) return res.status(401).json({ message: 'Token missing' });

  // Check if token is blacklisted
  if (tokenBlacklist.has(token)) {
    return res.status(401).json({ message: 'Token has been logged out' });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports.tokenBlacklist = tokenBlacklist;
