const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Database Connection
connectDB();

// Default Route
app.get("/", (req, res) => {
  res.send("Backend Server Running...");
});

module.exports = app;
