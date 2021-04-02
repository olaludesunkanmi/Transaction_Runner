const express = require("express");
const sendMoney = require("../controllers/transactions/sendMoney");
const addMoney = require("../controllers/transactions/addMoney");
const getTransaction = require("../controllers/transactions/getTransaction");
const removeTransaction = require("../controllers/transactions/removeTransaction");

const app = express();

app.post("/transaction/sendmoney", sendMoney);
app.post("/transaction/addmoney", addMoney);
app.get("/transaction", getTransaction);
app.delete("/transaction", removeTransaction);

module.exports = app;
