const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
  },
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
