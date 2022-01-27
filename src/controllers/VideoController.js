const Video = require("../models/Video");
const Category = require("../models/Category");

class VideoController {
  async create(req, res) {
    try {
      const { title, description, url, category_id } = req.body;

      const categoryExists = await Category.findOne({
        where: {
          id: category_id,
        },
      });

      if (!categoryExists)
        return res.status(404).json({ error: "Category not found" });

      const video = await Video.create({
        title,
        description,
        url,
        category_id,
      });

      return res.status(201).json(video);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getVideosFree(req, res) {
    try {
      const videos = await Video.findAll({
        attributes: ["id", "title", "description", "url", "category_id"],
        order: [["title", "ASC"]],
      });

      return res.status(200).json({ videos });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    try {
      const videos = await Video.findAll({
        attributes: ["id", "title", "description", "url", "category_id"],
        order: [["title", "ASC"]],
      });

      return res.status(200).json({ videos });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async getOneById(req, res) {
    try {
      const { id } = req.params;
      const video = await Video.findByPk(id);

      if (!video) return res.status(404).json({ error: "Video not found." });

      return res.status(200).json({ video });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { url } = req.body;
      const { id } = req.params;

      const video = await Video.findByPk(id);

      if (!video) return res.status(404).json({ error: "Video not found." });

      const videoUpdated = await video.update(
        {
          url,
        },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).json(videoUpdated);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const video = await Video.findByPk(id);

      if (!video) return res.status(404).json({ error: "Video not found." });

      await video.destroy({ where: { id } });

      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

module.exports = new VideoController();
