require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");

const app = express();

app.use(cors());

// Routes
app.use("/api", require("./routes"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("");
  console.log("=========================");
  console.log("✅ Server on port:", port, "!");
});

dbConnect();
