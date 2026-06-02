const { Router } = require("express");
const demo = require("../middleware");
const { getTodo, addTodo } = require("../controller/todo.controller");

const todoRouter = Router();

todoRouter.get("/", demo, getTodo);
todoRouter.post("/", demo, addTodo);

module.exports = { todoRouter };
