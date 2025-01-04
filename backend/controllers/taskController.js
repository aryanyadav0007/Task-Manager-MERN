const Task = require("../models/Task");

const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  const task = new Task({ title, description, userId: req.user.id });
  await task.save();
  res.status(201).send("Task Created");
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  await Task.findByIdAndUpdate(id, { title, description, completed });
  res.send("Task Updated");
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);
  res.send("Task Deleted");
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
