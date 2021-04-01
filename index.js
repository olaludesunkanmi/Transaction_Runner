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
// const employeeRoute = require('./routes/employee.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(index);
// app.use('/api/', employeeRoute);

// Load Routers
// app.use("/");

// Page not found error
app.get("*", (req, res) => {
  res.send("This route does not exist");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
