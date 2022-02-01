const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          id: uuidv4(),
          title: "html",
          color: "green",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "css",
          color: "red",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "javascript",
          color: "blue",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "nodejs",
          color: "black",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "sql",
          color: "white",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
