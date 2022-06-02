const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const { getItemValidator } = require("../validators/storage");

const {
  getItems,
  getItem,
  createItem,
  deleteItem,
} = require("../controllers/storage");

const router = express.Router();

router.post("/", uploadMiddleware.single("myfile"), createItem);
router.get("/", getItems);
router.get("/:id", getItemValidator, getItem);
router.delete("/:id", getItemValidator, deleteItem);

module.exports = router;
