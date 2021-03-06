const { Storage } = require("../models");
const { handleError } = require("../utils/handleError");
const fs = require("fs");

const MEDIA_PATH = `${__dirname}/../storage`;

// ! get Tracks
/**
 * It's an async function that uses the Storage model to find all items in the database and then sends
 * them back to the client
 * @param req - The request object.
 * @param res - The response object.
 */
const getItems = async (req, res) => {
  try {
    const items = await Storage.find({});
    res.send(items);
  } catch (error) {
    handleError(res, "Error getting items...");
  }
};

// ! get Item
/**
 * It takes the id from the request params, finds the item in the database, and sends it back to the
 * client
 * @param req - The request object.
 * @param res - The response object.
 * @returns The item is being returned.
 */
const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Storage.findById(id);
    if (!item) {
      res.send({ msg: "File not found..." });
      return;
    }
    res.send(item);
  } catch (error) {
    handleError(res, "Error getting File...");
  }
};

// ! create Item
/**
 * It creates a new item in the database with the filename and url of the file that was just uploaded
 * @param req - The request object.
 * @param res - The response object.
 */
const createItem = async (req, res) => {
  try {
    const { file } = req;
    const fileData = {
      filename: file.filename,
      url: `${process.env.PUBLIC_URL}/${file.filename}`,
    };
    const savedItem = await Storage.create(fileData);
    res.send(savedItem);
  } catch (error) {
    console.log(error);
  }
};

// ! delete Item
/**
 * It deletes the file from the database and the file system
 * @param req - The request object.
 * @param res - The response object.
 * @returns The file path and a deleted value of 1.
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Storage.findById(id);

    if (!item) {
      res.send({ msg: "File not found..." });
      return;
    }

    await Storage.deleteOne({ _id: id });

    const file_Path = `${MEDIA_PATH}/${item.filename}`;

    fs.unlinkSync(file_Path);
    const data = {
      file_Path,
      deleted: 1,
    };
    res.send(data);
  } catch (error) {
    handleError(res, "Error deleting file...");
  }
};

module.exports = { getItems, getItem, createItem, deleteItem };
