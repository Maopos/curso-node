const jsonwebtoken = require("jsonwebtoken");

/**
 * It takes a user object as an argument and returns a signed JWT token
 * @param user - The user object that we want to sign.
 * @returns A token
 */
const tokenSign = async (user) => {
  const sign = jsonwebtoken.sign(
    {
      _id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );
  return sign;
};

/**
 * It takes a token, and returns the decoded token if it's valid, or null if it's not
 * @param token - The token to verify.
 * @returns The decoded token.
 */
const verifyToken = async (token) => {
  try {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
