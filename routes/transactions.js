const express = require("express");
const sendMoney = require("../controllers/transactions/sendMoney");
const addMoney = require("../controllers/transactions/addMoney");
const getTransaction = require("../controllers/transactions/getTransaction");
const removeTransaction = require("../controllers/transactions/removeTransaction");
const isAuth = require("../middlewares/isAuth");

const app = express();

// Authentication
app.use(isAuth);

app.post("/transaction/sendmoney", sendMoney);
app.post("/transaction/addmoney", addMoney);
app.get("/transaction/:id", getTransaction);
app.delete("/transaction/:id", removeTransaction);

module.exports = app;
