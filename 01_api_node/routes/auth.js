const express = require("express");
const { registerValidator, loginValidator } = require("../validators/auth.js");
const session = require("../middleware/session");

const { register, login } = require("../controllers/auth");

const router = express.Router();

router.post("/register", registerValidator, register);
router.post("/login", loginValidator, session, login);

module.exports = router;
