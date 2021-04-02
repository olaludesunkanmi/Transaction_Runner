const db = require("../../config/database");

module.exports = async (req, res) => {
  if (!req.isAuth) {
    return res.status(403).json({
      status: 403,
      message: "You cannot perform this operation",
    });
  }
  const value = req.user.id;
  try {
    const user = await db.query("SELECT * FROM users WHERE id = $1", [value]);
    const transaction = await db.query(
      "SELECT * FROM transactions WHERE id = $1",
      [value]
    );
    if (!transaction.rows[0]) {
      res.status(404).json({
        status: 404,
        message: "Transaction not found",
      });
    }
    if (
      transaction.rows[0].id !== req.user.id &&
      req.user.email !== user.rows[0].email
    ) {
      res.status(403).json({
        status: 403,
        message: "Sorry, you can not access this transaction",
      });
    }

    res.status(200).send({
      status: 200,
      data: transaction.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong",
    });
  }
};
