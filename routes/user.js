const express = require("express");
const signUp = require("../controllers/auth/signUp");
const login = require("../controllers/auth/login");
const {
  signUpValidator,
  loginValidator,
} = require("../middlewares/userValidator");

const app = express();

app.post("/signup", signUpValidator, signUp);
app.post("/login", loginValidator, login);

module.exports = app;
