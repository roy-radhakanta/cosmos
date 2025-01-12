const express = require("express");
const http = require("http");
const { PORT, ALLOW_ACCESS } = require("../config/settings");
require("dotenv").config();
const db = require("../config/mongoose");
const app = express();
const server = http.createServer(app);
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ALLOW_ACCESS,
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false
  })
);

app.use(require("../routes/"));

server.listen(PORT, (err) => {
  if (err) {
    console.log("Error while starting server:", err);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});