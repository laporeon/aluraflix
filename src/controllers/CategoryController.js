const Category = require("../models/Category");
const Video = require("../models/Video");

class CategoryController {
  async create(req, res) {
    try {
      const { title, color } = req.body;

      const category = await Category.create({ title, color });

      return res.status(201).json({ category });
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async getAll(req, res) {
    try {
      const categories = await Category.findAll({
        attributes: ["id", "title", "color"],
        order: [["title", "ASC"]],
      });

      return res.status(200).json({ categories });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async getOneById(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      return res.status(200).json({ category });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async getCategoryVideos(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({
        where: {
          id,
        },
        attributes: ["id", "title", "color"],
        include: {
          model: Video,
          attributes: ["id", "title", "description", "url"],
        },
      });

      if (!category)
        return res.status(404).json({ error: "Category not found." });

      return res.status(200).json({ category });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { color } = req.body;
      const { id } = req.params;

      const category = await Category.findByPk(id);

      if (!category)
        return res.status(404).json({ error: "Category not found." });

      const categoryUpdated = await category.update(
        {
          color,
        },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).json(categoryUpdated);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);

      if (!category)
        return res.status(404).json({ error: "Category not found." });

      await category.destroy({ where: { id } });

      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

module.exports = new CategoryController();
