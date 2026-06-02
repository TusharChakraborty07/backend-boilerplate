const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");

    console.log("Database connected sucessfully...");
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = connectDB;
