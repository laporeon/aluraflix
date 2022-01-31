require("./database");
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const tokenRoutes = require("./routes/token.routes");
const videoRoutes = require("./routes/video.routes");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/auth", tokenRoutes);
app.use("/videos", videoRoutes);

module.exports = { port, app };
