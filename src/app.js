require("dotenv").config();

const express = require("express");
const connectDB = require("./db_config/db");

const app = express();

// Database connection

connectDB();

app.listen(`${process.env.PORT}`, () => {
  console.log("Server is running");
});
