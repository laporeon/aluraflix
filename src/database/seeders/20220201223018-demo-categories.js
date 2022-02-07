module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          id: "843f3612-a240-4e7e-9ac8-96f141768f31",
          title: "html",
          color: "green",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "60f429c8-39f0-4ffd-82b7-82afd1d1d2a4",
          title: "css",
          color: "red",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "c4006632-a9a4-45da-8be1-11dcdec152c5",
          title: "javascript",
          color: "blue",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "905c449c-f08d-47d8-aafb-7f4f1aeef0f2",
          title: "nodejs",
          color: "black",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f96ae200-3989-4b25-9541-871c73047f35",
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
