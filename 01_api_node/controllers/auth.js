const { User } = require("../models");
const { handleError } = require("../utils/handleError");
const { tokenSign, verifyToken } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");

// ! Register User
/**
 * It creates a new user and returns a token and the user
 * @param req - The request object.
 * @param res - The response object.
 */
const register = async (req, res) => {
  try {
    const body = req.body;
    body.password = await encrypt(req.body.password);
    const user = await User.create(body);
    /* Setting the password to undefined. */
    user.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(user),
      user,
    };

    res.send(data);
  } catch (error) {
    handleError(res, "Create User goes wrong...", 403);
  }
};

// todo: 4:11:49

module.exports = { register };
