const multer = require("multer");

/* Creating a storage object that will be used by multer to store the file. */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  },
});

/* Creating a middleware that will be used to upload files. */
const uploadMiddleware = multer({
  storage,
});

module.exports = uploadMiddleware;
