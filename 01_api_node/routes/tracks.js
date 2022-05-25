const express = require("express");
const customHeader = require("../middleware/customHeader");
const {
  createItemValidator,
  getItemValidator,
} = require("../validators/tracks");

const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/tracks");

const router = express.Router();

router.post("/", createItemValidator, createTrack);
router.get("/", getTracks);
router.get("/:id", getItemValidator, getTrack);
router.put("/:id", createItemValidator, getItemValidator, updateTrack);
router.delete("/:id", getItemValidator, deleteTrack);

module.exports = router;
