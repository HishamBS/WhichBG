const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
require("dotenv/config");
mongoose.set("useCreateIndex", true);
//DB Connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("DB IS CONNECTED");
  }
);

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// server.use(express.static(path.join(__dirname, "build")));

//Routes
server.use("/api/v1/posts", require("./routes/posts.js"));
// server.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});