const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Welcome to transaction runner",
    version: "1.0",
  });
});

module.exports = app;
