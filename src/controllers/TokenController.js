const { sign } = require("jsonwebtoken");
const { compare } = require("bcrypt");

const User = require("../models/User");

class TokenController {
  async store(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ where: { username } });

      if (!user) return res.status(401).json({ error: "Invalid credentials." });

      const passwordMatches = await compare(password, user.password);

      if (!passwordMatches)
        return res.status(401).json({ error: "Invalid credentials." });

      const { id } = user;

      const token = sign({ id, username }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION_TIME,
      });

      return res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

module.exports = new TokenController();
