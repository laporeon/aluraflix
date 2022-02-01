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
          category_id: "47e64870-b9b8-4541-8ea9-fde83f58a3ba",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "CSS Tutorial - Zero to Hero (Complete Course)",
          description:
            "Learn CSS in this full course for beginners. CSS, or Cascading Style Sheet, is responsible for the styling and looks of a website. ",
          url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
          category_id: "31e50216-be8e-4192-b3a2-5c47aa9c6312",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "Learn JavaScript - Full Course for Beginners",
          description:
            "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language.",
          url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
          category_id: "7112c1ee-b523-4dba-a4be-8f443be6825f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "Node.js and Express.js - Full Course",
          description:
            "Learn how to use Node and Express in this comprehensive course. First, you will learn the fundamentals of Node and Express. Then, you will learn to build a complex Rest API. Finally, you will build a MERN app and other Node projects",
          url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
          category_id: "a52fe0d2-ad31-4267-9ebd-0a52a16f46b5",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: "SQL Tutorial - Full Database Course for Beginners",
          description:
            "In this course, we'll be looking at database management basics and SQL using the MySQL RDBMS. ",
          url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
          category_id: "f477eb3b-db5e-4877-8e8a-48f3ad4abc50",
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
