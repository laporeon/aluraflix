const User = require("../models/User");

class UserController {
  async create(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.create({ username, password });

      return res.status(201).json({ user });
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) return res.status(404).json({ error: "User not found." });

      await user.destroy({ where: { id } });

      return res.status(200).send();
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

module.exports = new UserController();
