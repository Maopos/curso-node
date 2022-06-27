import express from "express";
import taskRouter from "./routes/tasks.js";

const app = express();

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("👨🏻‍💻 Task Manager Server...");
});
app.use("/api/v1/tasks", taskRouter);

const port = 3000;

app.listen(port, () => {
  console.log("=========================");
  console.log("✅ Server on port: ", port);
});

// todo: 22:49
