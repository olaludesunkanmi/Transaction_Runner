const db = require("../../config/database");

module.exports = async (req, res) => {
  if (!req.isAuth) {
    return res.status(403).json({
      status: 403,
      message: "You cannot perform this operation",
    });
  }
  const id = req.user.id;
  const { amount } = req.body;
  let increment = 0;
  const user = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  if (user.rows[0].email !== req.user.email) {
    return res.status(403).json({
      status: 403,
      message: "You cannot perform this operation",
    });
  }
  try {
    const findUserTransaction = await db.query(
      "SELECT * FROM transactions WHERE id = $1",
      [id]
    );
    const findUser = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    if (findUserTransaction.rowCount === 0) {
      return res.status(404).json({
        status: 404,
        message: "The transaction with this user cannot be found",
      });
    }
    if (!findUser.rowCount === 0) {
      return res.status(404).json({
        status: 404,
        message: "This user cannot be found",
      });
    }
    increment = findUserTransaction.rows[0].incomingtransactions;
    increment++;
    const transaction = await db.query(
      "UPDATE transactions SET amount = $1, incomingtransactions = $2 WHERE id = $3 returning *",
      [amount, increment, id]
    );
    const removebalance = findUser.rows[0].balance + amount;
    const newBalance = await db.query(
      "UPDATE users SET balance = $1 WHERE id = $2 returning *",
      [removebalance, id]
    );

    const newUserInfo = {
      id: newBalance.rows[0].id,
      firstname: newBalance.rows[0].firstname,
      lastname: newBalance.rows[0].lastname,
      balance: newBalance.rows[0].balance,
    };

    res.status(201).send({
      message: "Money received successfully!",
      incomingTransactionCount: transaction.rows[0].incomingtransactions,
      data: newUserInfo,
    });
  } catch (error) {
    console.error("sendMoney", error);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
};
