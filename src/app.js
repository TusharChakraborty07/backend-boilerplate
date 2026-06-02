const express = require("express");
const app = express();
const demo = require("./middleware");
const { todoRouter } = require("./routes/todo.routes.js");

app.use(express.json());

app.use("/", todoRouter);

module.exports = app;
