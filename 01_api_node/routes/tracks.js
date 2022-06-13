const express = require("express");
const authMiddleware = require("../middleware/session");
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
router.get("/", authMiddleware, getTracks);
router.get("/:id", getItemValidator, getTrack);
router.put("/:id", createItemValidator, getItemValidator, updateTrack);
router.delete("/:id", getItemValidator, deleteTrack);

module.exports = router;
