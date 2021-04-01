const db = require("../../config/database");

module.exports = async (req, res) => {
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
        error: "Transaction not found",
      });
      return;
    }
    if (
      transaction.rows[0].id !== req.user.id &&
      req.user.email !== user.rows[0].email
    ) {
      res.status(403).json({
        status: 403,
        error: "Sorry, you can not delete this car",
      });
      return;
    }

    await db.query("DELETE FROM transactions WHERE id = $1", [value]);

    res.status(200).send({
      status: 200,
      data: "Transaction successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: "Something went wrong",
    });
  }
};
