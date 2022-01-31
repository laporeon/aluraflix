const { Router } = require("express");
const VideoController = require("../controllers/VideoController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const videoRoutes = Router();

videoRoutes
  .get("/free", VideoController.list)
  .get("/", ensureAuthenticated, VideoController.list)
  .get("/:id", ensureAuthenticated, VideoController.getById)
  .post("/", ensureAuthenticated, VideoController.create)
  .patch("/:id", ensureAuthenticated, VideoController.update)
  .delete("/:id", ensureAuthenticated, VideoController.delete);

module.exports = videoRoutes;
