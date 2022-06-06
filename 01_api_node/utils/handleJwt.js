const jsonwebtoken = require("jsonwebtoken");

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

const verifyToken = async (token) => {
  try {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
