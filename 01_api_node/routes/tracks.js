const express = require("express");
const {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/tracks");

const router = express.Router();

router.get("/", getTracks);
router.post("/", createTrack);
// router.get("/:id", getTrack);

module.exports = router;
