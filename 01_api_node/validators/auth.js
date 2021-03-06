const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

/* An array of validators. */
const registerValidator = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 30 }),
  check("age").exists().notEmpty().isNumeric(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 10 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

/* An array of validators. */
const loginValidator = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 3, max: 10 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { registerValidator, loginValidator };
