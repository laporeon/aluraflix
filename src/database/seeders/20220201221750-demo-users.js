const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: uuidv4(),
          username: "elonmusk",
          password: "12345678",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "johndoe",
          password: "12345678",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "rickspanish",
          password: "12345678",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "corsair",
          password: "12345678",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "logitech",
          password: "12345678",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
