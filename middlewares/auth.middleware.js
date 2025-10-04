const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers["token"];
  try {
    const userToken = jwt.verify(token, "clave", { algorithm: "HS512" });
    req.tok = userToken;
    next();
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = authMiddleware;


