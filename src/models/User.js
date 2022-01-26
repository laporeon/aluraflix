const { Sequelize, Model } = require("sequelize");
const { hash } = require("bcrypt");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        username: {
          type: Sequelize.STRING,
          unique: {
            args: true,
            msg: "Username already registered.",
          },
          validate: {
            len: {
              args: [6, 30],
              msg: "Username must have between 6 and 30 characters.",
            },
            notEmpty: {
              args: true,
              msg: "Field USERNAME is required",
            },
          },
        },
        password: {
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              args: true,
              msg: "Field PASSWORD is required",
            },
            len: {
              args: [8, 20],
              msg: "Password must have between 8 and 20 characters.",
            },
          },
        },
      },
      { sequelize, tableName: "users" }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) user.password = await hash(user.password, 8);
    });

    return this;
  }
}

module.exports = User;
