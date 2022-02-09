const { v4: uuidv4 } = require("uuid");
const { hash } = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: uuidv4(),
          username: "elonmusk",
          password: await hash("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "johndoe",
          password: await hash("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "rickspanish",
          password: await hash("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "corsair",
          password: await hash("12345678", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          username: "logitech",
          password: await hash("12345678", 8),
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
