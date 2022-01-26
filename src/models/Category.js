const { Sequelize, Model } = require("sequelize");

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        title: {
          type: Sequelize.STRING,
          unique: {
            args: true,
            msg: "Title already registered.",
          },
          validate: {
            notEmpty: {
              args: true,
              msg: "Field TITLE is required",
            },
          },
        },
        color: {
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              args: true,
              msg: "Field COLOR is required",
            },
          },
        },
      },
      { sequelize, tableName: "categories" }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Video, {
      constraints: false,
      foreignKey: "category_id",
    });
  }
}

module.exports = Category;
