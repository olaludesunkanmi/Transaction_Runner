const db = require("../../config/database");

module.exports = async (req, res) => {

  const value = parseInt(req.params.id, 10);
  try {
    const transaction = await db.query(
      "SELECT * FROM transactions WHERE id = $1",
      [value]
    );
    if (!transaction.rows[0]) {
      res.status(404).json({
        status: 404,
        message: "Transaction not found",
      });
    } else {
      res.status(200).json({
        status: 200,
        data: transaction.rows[0],
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong",
    });
  }
};
