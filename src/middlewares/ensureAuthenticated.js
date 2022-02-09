const { verify } = require("jsonwebtoken");
const User = require("../models/User");

async function ensureAuthenticated(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: "Login required." });

  const [, token] = authorization.split(" ");

  try {
    const { id, username } = verify(token, process.env.TOKEN_SECRET);

    const user = await User.findByPk(id);

    if (!user)
      return res.status(404).json({ error: "User invalid or not found." });

    req.userId = id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
}

module.exports = ensureAuthenticated;
