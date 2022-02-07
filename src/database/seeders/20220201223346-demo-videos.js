const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "videos",
      [
        {
          id: uuidv4(),
          title: "HTML Full Course - Build a Website Tutorial",
          description:
            "Learn the basics of HTML5 and web development in this awesome course for beginners. ",
          url: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
          category_id: "843f3612-a240-4e7e-9ac8-96f141768f31",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "CSS Tutorial - Zero to Hero (Complete Course)",
          description:
            "Learn CSS in this full course for beginners. CSS, or Cascading Style Sheet, is responsible for the styling and looks of a website. ",
          url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
          category_id: "60f429c8-39f0-4ffd-82b7-82afd1d1d2a4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "Learn JavaScript - Full Course for Beginners",
          description:
            "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language.",
          url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
          category_id: "c4006632-a9a4-45da-8be1-11dcdec152c5",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "Node.js and Express.js - Full Course",
          description:
            "Learn how to use Node and Express in this comprehensive course. First, you will learn the fundamentals of Node and Express. Then, you will learn to build a complex Rest API. Finally, you will build a MERN app and other Node projects",
          url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
          category_id: "905c449c-f08d-47d8-aafb-7f4f1aeef0f2",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "SQL Tutorial - Full Database Course for Beginners",
          description:
            "In this course, we'll be looking at database management basics and SQL using the MySQL RDBMS. ",
          url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
          category_id: "f96ae200-3989-4b25-9541-871c73047f35",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("videos", null, {});
  },
};
