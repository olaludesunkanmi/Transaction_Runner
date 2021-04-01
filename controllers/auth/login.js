const { compareSync } = require("bcrypt");
const db = require("../../config/database");
const generateToken = require("../../utils/generateToken");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const params = [email];
  try {
    const { rows } = await db.query(
      "SELECT * FROM users where email = $1",
      params
    );
    if (rows.length === 0) {
      res.status(401).json({
        status: 401,
        error: "Authentication failed",
      });
    }
    if (rows[0]) {
      const comparePassword = compareSync(password, rows[0].password);
      if (!comparePassword) {
        return res.status(401).json({
          status: 401,
          error: "Incorrect login details",
        });
      }
      const authUser = rows[0].id;
      const token = generateToken(authUser);
      return res.status(200).json({
        status: 200,
        data: [
          {
            token,
          },
        ],
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};
