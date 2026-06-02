const todoModel = require("../models/todo.model");

// Get
const getTodo = async (req, res) => {
  const todos = await todoModel.find();

  res.status(200).json({ sucess: true, data: todos });
};

module.exports = { getTodo };
