const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  validationResult(req).throw();
  return next();
};

module.exports = validate;






