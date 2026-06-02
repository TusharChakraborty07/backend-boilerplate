const express = require("express");
const app = express();

app.use(express.json());

const todos = [];

// Get
app.get("/", (req, res) => {
  //   res.send("Todos are: ", todo);

  res.status(200).json({ sucess: true, data: todos });
});

// Post
app.post("/create", (req, res) => {
  const newTodo = req.body;

  todos.push(newTodo);

  res.status(201).json({
    sucess: true,
    message: "Todo added sucessfully",
    data: todos,
  });
});

// Delete
app.delete("/delete/:index", (req, res) => {
  const index = req.params.index;

  const newTodo = todos.splice(index, 1);

  res.status(201).json({
    sucess: true,
    message: "Todo removed sucessfully",
    data: newTodo,
  });
});

module.exports = app;
