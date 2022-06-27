import express from "express";

const taskRouter = express.Router();

taskRouter.route("/").get((req, res) => {
  res.send("All items...");
});

export default taskRouter;
