const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// External Dependencies
dotenv.config({
  path: "./config/config.env",
});

const app = express();
const port = process.env.PORT || 3000;

const index = require("./routes/index");
const login = require("./middlewares/login");
const user = require("./routes/user");
const transactions = require("./routes/transactions");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(login);
app.use("/api/v1", transactions);
app.use("/api/v1/auth", user);

app.use(index);

// Page not found error
app.all("*", (req, res) => {
  res.send("This route does not exist");
});

const SERVER = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Handles Connection Error
process.on("unhandledRejection", (error, promise) => {
  console.log(`${error.message}`);
  SERVER.close(() => {
    process.exit(1);
  });
});

//module.exports = app;
