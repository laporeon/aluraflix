const { Router } = require("express");
const UserController = require("../controllers/UserController");

const userRoutes = Router();

userRoutes
  .post("/", UserController.create)
  .delete("/:id", UserController.delete);

module.exports = userRoutes;
