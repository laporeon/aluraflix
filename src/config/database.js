require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
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
  },
  production: {
    use_env_variable: "CLEARDB_DATABASE_URL",
    dialect: "mysql",
  },
};
