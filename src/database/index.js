const { Sequelize } = require("sequelize");

const databaseConfig = require("../config/database");

const connection = new Sequelize(databaseConfig);

const User = require("../models/User");
const Category = require("../models/Category");
const Video = require("../models/Video");

const models = [User, Category, Video];

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
