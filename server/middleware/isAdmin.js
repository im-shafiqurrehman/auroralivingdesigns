/**
 * isAdmin middleware
 * Use after `protect`. Rejects requests where the authenticated user is not an admin.
 */
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') return next();
  return res.status(403).json({ message: 'Admin access only' });
};

module.exports = isAdmin;
