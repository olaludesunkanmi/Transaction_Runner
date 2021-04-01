const { hashSync } = require("bcrypt");
const db = require("../../config/database");
const generateToken = require("../../utils/generateToken");

module.exports = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const params = [firstname, lastname, email, hashSync(password, 10)];
  const transaction = [0, 0, 0];

  try {
    const { rows } = await db.query(
      "INSERT INTO users (firstname,lastname,email, password) VALUES ($1, $2, $3, $4) returning *",
      params
    );
    if (rows) {
      await db.query(
        "INSERT INTO transactions (incomingtransactions, outgoingtransactions, amount) VALUES ($1, $2, $3) returning *",
        transaction
      );
      const authUser = rows[0].id;
      const authEmail = rows[0].email;
      const token = generateToken(authUser, authEmail);
      return res.status(201).json({
        status: 201,
        data: [
          {
            token,
            message: "User created succesfully",
          },
        ],
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};
