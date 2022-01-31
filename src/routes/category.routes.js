const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const categoryRoutes = Router();

categoryRoutes
  .get("/free", CategoryController.list)
  .get("/", ensureAuthenticated, CategoryController.list)
  .get("/:id", ensureAuthenticated, CategoryController.getById)
  .get("/:id/videos", ensureAuthenticated, CategoryController.getCategoryVideos)
  .post("/", ensureAuthenticated, CategoryController.create)
  .patch("/:id", ensureAuthenticated, CategoryController.update)
  .delete("/:id", ensureAuthenticated, CategoryController.delete);

module.exports = categoryRoutes;
