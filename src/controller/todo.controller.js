const todoModel = require("../models/todo.model");

// Get
const getTodo = async (req, res) => {
  const todos = await todoModel.find();

  res.status(200).json({ sucess: true, data: todos });
};

// Post
const addTodo = async (req, res) => {
  const todo = req.body;
  const todos = await todoModel.create(todo);

  res.status(200).json({ sucess: true, data: todo });
};

module.exports = { getTodo, addTodo };
