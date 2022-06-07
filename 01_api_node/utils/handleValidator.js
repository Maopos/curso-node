const { validationResult } = require("express-validator");

/**
 * If the validation result is valid, call the next function, otherwise send an error response
 * @param req - The request object
 * @param res - The response object
 * @param next - The next middleware function in the stack.
 * @returns An array of errors
 */
const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};

module.exports = validateResults;
