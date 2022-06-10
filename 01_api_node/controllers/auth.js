const { User } = require("../models");
const { handleError } = require("../utils/handleError");
const { tokenSign, verifyToken } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");
const { matchedData } = require("express-validator");

// ! Register User
/**
 * It creates a new user and returns a token and the user
 * @param req - The request object.
 * @param res - The response object.
 */
const register = async (req, res) => {
  try {
    const body = req.body;
    /* Checking if the email is already in use. */
    const newUser = await User.findOne({ email: body.email });
    if (newUser) {
      res.send({ msg: "This email is alraedy in use..." });
      return;
    }

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

// ! Login User
/**
 * It takes the user's email and password, checks if the user exists, and if the user exists, it checks
 * if the password is correct. If the password is correct, it returns a token and the user's
 * information
 * @param req - The request object.
 * @param res - The response object.
 * @returns The user is being returned.
 */
const login = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await User.findOne({ email: req.email }).select(
      "password name role email"
    );
    /* Checking if the user exists. */
    if (!user) {
      handleError(res, "Username does not exist...", 404);
      return;
    }

    const hash = user.password;
    const check = await compare(req.password, hash);

    if (!check) {
      handleError(res, "Invalid Password...", 401);
      return;
    }

    /* Setting the password to undefined. */
    user.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(user),
      user,
    };
    res.send(data);
  } catch (error) {
    handleError(res, "Login User goes wrong...", 404);
  }
};



module.exports = { register, login };
