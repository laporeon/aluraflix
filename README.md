<h1 align="center">
	<img alt="Logo" src="https://leticiacamposs2-aluraflix.vercel.app/static/media/logo.23311859.png" width="120px" />
</h1>

<h3 align="center">
  Aluraflix
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/laporeon/aluraflix">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/laporeon/aluraflix">
  
  <a href="https://github.com/laporeon/aluraflix/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/laporeon/aluraflix">
  </a>
  
  <a href="https://github.com/laporeon/aluraflix/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/laporeon/aluraflix">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/laporeon/aluraflix">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 📜 About the project

This is my solution for a challenge provided by <a href="https://www.alura.com.br/" target="_blank">Alura</a>. It's a web API that simulates a management system for a streaming plataform.

You can check the full description and requirements of the challenge on the followings links:

- <a href="https://trello.com/b/Mj5x6lMZ/alura-challenge-backend-semana-1">Part I</a>&nbsp;
- <a href="https://trello.com/b/5DavhAH7/alura-challenge-backend-semana-2">Part II</a>&nbsp;
- <a href="https://trello.com/b/STIogyU7/alura-challenge-backend-semana-3">Part III</a>&nbsp;

---

## 🚀 Technologies

Techs and tools used to develop this project:

- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/)
- [Insomnia](https://insomnia.rest/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Follow the steps below**

```bash

# Clone the project and access the folder
$ git clone https://github.com/laporeon/aluraflix.git && cd aluraflix

# Install the dependencies
# using yarn
$ yarn
# using npm
$ npm i

# Conect with database:
# Change the name of .env.sample to .env
# Inside it, pass your credentials into the respective variables

# Create database and database tables
# using yarn
$ yarn sequelize db:create # Create database schema
$ yarn sequelize db:migrate # Create database tables
$ yarn sequelize db:seed:all # Populate database
# using npm
$ npx sequelize db:create # Create database schema
$ npx sequelize db:migrate # Create database tables
$ npx sequelize db:seed:all # Populate database

# Start application
# using yarn
$ yarn dev
# using npm
$ npm run dev


# Project has been started!
# Open the application in your browser on port 4000 with http://localhost:4000/
# To access swagger docs, go to http://localhost:4000/api-docs
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[⬆ Back to the top](#-about-the-project)
