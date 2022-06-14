const express = require("express");
const authMiddleware = require("../middleware/session");
const checkRole = require("../middleware/role");
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

router.post("/", authMiddleware, checkRole(['admin']), createItemValidator, createTrack);
router.get("/", authMiddleware, getTracks);
router.get("/:id", authMiddleware, getItemValidator, getTrack);
router.put(
  "/:id",
  authMiddleware,
  createItemValidator,
  getItemValidator,
  updateTrack
);
router.delete("/:id", authMiddleware, getItemValidator, deleteTrack);

module.exports = router;
