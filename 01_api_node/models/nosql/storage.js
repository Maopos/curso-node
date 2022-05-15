const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
  {
      
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Storage", StorageSchema);
