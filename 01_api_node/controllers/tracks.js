const { Track } = require("../models");

// ! get Tracks
const getTracks = async (req, res) => {
  const tracks = await Track.find({});
  //   const tracks = ["Hola", "Mundillo..."];

  res.send({ tracks });
};

// ! get Track
const getTrack = async (req, res) => {};

// ! create Track
const createTrack = async (req, res) => {};

// ! update Track
const updateTrack = async (req, res) => {};

// ! delete Track
const deleteTrack = async (req, res) => {};

module.exports = { getTracks, getTrack, createTrack, updateTrack, deleteTrack };
