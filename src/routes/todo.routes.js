const { Router } = require("express");
const demo = require("../middleware");
const { getTodo } = require("../controller/todo.controller");

const todoRouter = Router();

todoRouter.get("/", demo, getTodo);

module.exports = { todoRouter };
