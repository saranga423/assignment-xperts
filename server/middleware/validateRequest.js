// Middleware for validating user input in requests
// server/middleware/validateRequest.js
export const requireFields = (fields = []) => (req, res, next) => {
  const missing = fields.filter(f => !req.body?.[f]);
  if (missing.length) {
    res.status(400);
    return next(new Error(`Missing fields: ${missing.join(", ")}`));
  }
  next();
};
