require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
const { IncomingWebhook } = require("@slack/webhook");
const dbConnect = require("./config/mongo");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

/* This is a middleware that logs all the requests to the server. */
const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK);

const loggerStream = {
  write: (message) => {
    webhook.send({
      text: message,
    });
  },
};

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  logRequestBody: false,
  // skip: function (req, res) {
  //   return res;
  // },
});

// Routes
app.use("/api", require("./routes"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("");
  console.log("=========================");
  console.log("✅ Server on port:", port, "!");
});

dbConnect();
