const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = (id, email) => {
  return jwt.sign(
    {
      id,
      email,
    },
    process.env.SECRET,
    { expiresIn: "7d" }
  );
};
