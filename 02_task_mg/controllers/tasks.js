// ! Create Task
const createTask = async (req, res) => {
  res.send("Creating task...");
};

// ! Get all tasks
const getTasks = async (req, res) => {
  res.send("All tasks...");
};

// ! Get one task
const getTask = async (req, res) => {
  res.send("One Task...");
};

// ! Edit task
const editTask = async (req, res) => {
  res.send("Editing Task...");
};

// ! Delete task
const deleteTask = async (req, res) => {
  res.send("Deleting Task...");
};

export { createTask, getTask, getTasks, editTask, deleteTask };
