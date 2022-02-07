const { Sequelize, Model } = require("sequelize");

class Video extends Model {
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
        description: {
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              args: true,
              msg: "Field DESCRIPTION is required",
            },
          },
        },
        url: {
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              args: true,
              msg: "Field URL is required",
            },
          },
        },
        category_id: {
          type: Sequelize.UUID,
          allowNull: false,
          validate: {
            notEmpty: {
              args: true,
              msg: "Field CATEGORY_ID is required",
            },
          },
        },
      },
      { sequelize, tableName: "videos" }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: "category_id",
    });
  }
}

module.exports = Video;
