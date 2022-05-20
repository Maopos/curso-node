const express = require("express");
const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/tracks");
const { createItemValidator } = require("../validators/tracks");

const router = express.Router();

router.get("/", getTracks);
router.post("/", createItemValidator , createTrack);

module.exports = router;
