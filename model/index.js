const userTable = require("./user");
const transactionTable = require("./transaction");

(async () => {
  try {
    await userTable();
    await transactionTable();
  } catch (err) {
    console.log(err);
  }
})();
