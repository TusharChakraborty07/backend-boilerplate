const app = require("./src/app");

const connectDB = require("./src/db/db");

// Database
connectDB();

app.listen(3000, () => {
  console.log("Server is running...");
});
