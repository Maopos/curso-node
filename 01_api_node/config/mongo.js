const mongoose = require("mongoose");

const dbConnect = () => {
  const MONGO_URI = process.env.MONGO_URI;
  mongoose.connect(
    MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error, res) => {
      if (!error) {
        console.log("✅ Database is connected!");
        console.log("=========================");
        console.log("");
      } else {
        console.log("❌ Database connection error...");
        console.log("=========================");
        console.log("");
      }
    }
  );
};

module.exports = dbConnect;
