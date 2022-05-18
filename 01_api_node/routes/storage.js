const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/storage");

const router = express.Router();

router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
