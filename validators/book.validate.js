const { check, body, param, query, cookie, header } = require("express-validator");
const validate = require("../utils/validate");

const bookValidator = [
  body("bookId", "error in bookId")
    .exists()
    .withMessage("bookId should to exist")
    .isInt()
    .withMessage("bookId should be an integer"),

  check("title", "error in title")
    .exists()
    .withMessage("title should to exist")
    .isString()
    .withMessage("title should be a string")
    .isLength({ max: 25 })
    .withMessage("title should have just 25 characteres"),

  check("author", "error in author")
    .exists()
    .withMessage("author should to exist")
    .isString()
    .withMessage("author should be a string")
    .isLength({ max: 25 })
    .withMessage("author should have just 25 characteres"),

  body("publicationYear", "error in publicationYear")
    .exists()
    .withMessage("publicationYear should to exist")
    .isInt()
    .withMessage("publicationYear should be an integer"),

  (req, res, next) => {
    validate(req, res, next);
  },
];

module.exports = bookValidator;




