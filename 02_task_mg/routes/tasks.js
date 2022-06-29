import express from "express";
import {
  createTask,
  getTask,
  getTasks,
  editTask,
  deleteTask,
} from "../controllers/tasks.js";

const taskRouter = express.Router();

taskRouter.post("/", createTask);
taskRouter.get("/", getTasks);
taskRouter.get("/:id", getTask);
taskRouter.patch("/:id", editTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;


