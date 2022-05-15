const express = require("express");
const fs = require("fs");

const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExt = (fileName) => {
  return fileName.split(".").shift();
};

const a = fs.readdirSync(PATH_ROUTES).filter((i) => {
  const name = removeExt(i);

  if (name !== "index") {
    router.use(`/${name}`, require(`./${i}`));
  }
});

module.exports = router;
