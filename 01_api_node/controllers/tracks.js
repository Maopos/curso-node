const { matchedData } = require("express-validator");
const { Track } = require("../models");
const { handleError } = require("../utils/handleError");

// ! get Tracks
const getTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.send(tracks);
  } catch (error) {
    handleError(res, "Something goes wrong...", 403);
  }
};

// ! get Track
const getTrack = async (req, res) => {
  try {
    const { id } = req.params;
    const track = await Track.findById(id);

    res.json(track || { msg: "Track not found..." });
  } catch (error) {
    handleError(res, "Track not found...", 404);
  }
};

// ! create Track
const createTrack = async (req, res) => {
  try {
    const cleanTrack = matchedData(req);
    const savedTrack = await Track.create(cleanTrack);
    res.send(savedTrack);
  } catch (error) {
    handleError(res, "Create tracks goes wrong...", 403);
  }
};

// ! update Track
const updateTrack = async (req, res) => {
  try {
    const { id } = req.params;
    const cleanTrack = matchedData(req);
    const updatedTrack = await Track.findByIdAndUpdate(id, cleanTrack);

    res.send(updatedTrack.name + ", was updated...");
  } catch (error) {
    handleError(res, "Error updating track...", 403);
  }
};

// ! delete Track
const deleteTrack = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTrack = await Track.delete({ _id: id });
    if (!deletedTrack) {
      res.send({ msg: "Track not found..." });
      return;
    }
    res.send({ msg: "Track deleted..." });
  } catch (error) {
    handleError(res, "Error deleting track...", 403);
  }
};

module.exports = { getTracks, getTrack, createTrack, updateTrack, deleteTrack };
