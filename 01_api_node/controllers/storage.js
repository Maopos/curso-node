const { Storage } = require("../models");

// ! get Tracks
const getItems = async (req, res) => {
  const items = await Storage.find({});

  res.send({ items });
};

// ! get Item
const getItem = async (req, res) => {};

// ! create Item
const createItem = async (req, res) => {
  try {
    const { file } = req;
    // const savedItem = await Storage.create(item);
    res.send(file);
  } catch (error) {
    console.log(error);
  }
};

// ! update Item
const updateItem = async (req, res) => {};

// ! delete Item
const deleteItem = async (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
