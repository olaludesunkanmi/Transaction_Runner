const db = require("../../config/database");

module.exports = async (req, res) => {
  if (!req.isAuth) {
    return res.status(403).json({
      status: 403,
      message: "You cannot perform this operation",
    });
  }
  try {
    const user = await db.query("SELECT * FROM users WHERE id = $1", [
      req.user.id,
    ]);
    const transaction = await db.query(
      "SELECT * FROM transactions WHERE id = $1",
      [req.user.id]
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
        message: "Sorry, you can not delete this transaction",
      });
    }

    await db.query("DELETE FROM transactions WHERE id = $1", [req.user.id]);

    res.status(200).send({
      status: 200,
      data: "Transaction successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong",
    });
  }
};
