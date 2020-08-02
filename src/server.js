const express = require("express");
const connectDB = require("./db");

connectDB();

const app = express();

app.use("/api", require("./routes"));

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
