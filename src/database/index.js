const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";

console.log(env);

const databaseConfig = require("../config/database")[env];

let connection;

if (databaseConfig.use_env_variable) {
  connection = new Sequelize(
    process.env[databaseConfig.use_env_variable],
    databaseConfig
  );
} else {
  connection = new Sequelize(
    databaseConfig.database,
    databaseConfig.username,
    databaseConfig.password,
    databaseConfig
  );
}

const User = require("../models/User");
const Category = require("../models/Category");
const Video = require("../models/Video");

const models = [User, Category, Video];

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
