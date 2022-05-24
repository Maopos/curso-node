const express = require("express");
const customHeader = require("../middleware/customHeader");
const { createItemValidator } = require("../validators/tracks");  

const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/tracks");

const router = express.Router();

router.get("/", getTracks);
router.post("/", createItemValidator, customHeader, createTrack);

module.exports = router;
