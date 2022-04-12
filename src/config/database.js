require("dotenv").config();

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: process.env.DB_PORT,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  dialectOptions: {
    useUTC: false,
  },
  timezone: "-03:00",

};
