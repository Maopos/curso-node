const express = require("express");
const { registerValidator, loginValidator } = require("../validators/auth.js");

const { register } = require("../controllers/auth");

const router = express.Router();

router.post("/register", registerValidator, register);

module.exports = router;
