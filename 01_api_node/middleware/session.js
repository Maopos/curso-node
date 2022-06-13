const { handleError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { User } = require("../models");

/**
 * 1. It checks if the request has an authorization header,
 * 2. If it does, it splits the header into two parts, the first part is the type of authorization
 * (in this case, * Bearer), and the second part is the token.
 * 3. Then, it verifies the token and checks if the token has an _id property, if it doesn't, it returns an error
 * 4. if it does, it calls the next function,
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that is called when the middleware is complete.
 * @returns a middleware function that will be used to validate the token.
 */
const authMiddleware = async (req, res, next) => {
  try {
    //   1.
    if (!req.headers.authorization) {
      handleError(res, "Token error...", 401);
      return;
    }
    // 2.
    const token = req.headers.authorization.split(" ")[1];
    const dataToken = await verifyToken(token);
    // 3.
    if (!dataToken._id) {
      handleError(res, "User Id error...", 401);
      return;
    }

    const user = await User.findById(dataToken._id);
    req.user = user;

    // 4.
    next();
  } catch (error) {
    handleError(res, "Not avalible session...", 401);
  }
};

module.exports = authMiddleware;
