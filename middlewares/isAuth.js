module.exports = async (req, res, next) => {
  if (!req.isAuth) {
    res.status(403);
    throw new Error("You cannot perform this operation");
  }
  next();
};
