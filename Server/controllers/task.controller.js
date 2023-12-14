const TaskModel = require("../models/task");
const taskController = {};

taskController.createTask = async (req, res) => {
  const task = new TaskModel({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
    date_execute: req.body.date_execute,
    ip_user: req.body.ip_user,
    sub_tasks: req.body.sub_tasks,
  });
  await task.save();
  res.json({
    status: "Task Created",
  });
};
taskController.getTasks = async (req, res) => {
  const task = await TaskModel.find();
  res.json(task);
};
taskController.getTask = async (req, res) => {
  const task = await TaskModel.findById(req.params.id);
  res.json(task);
};
taskController.getTaskToDate = (req, res) => {
  res.json({
    status: "Task for date",
  });
};
taskController.updateTask = async (res, req) => {
  const { id } = req.params;
  const task = {
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
    date_execute: req.body.date_execute,
    ip_user: req.body.ip_user,
    sub_tasks: req.body.sub_tasks,
  };
  await TaskModel.findByIdAndUpdate(id, { $set: task }, { new: true });

  res.json({
    status: "Task update successfull",
  });
};

taskController.deleteTask = async (req, res) => {
  await TaskModel.findByIdAndDelete(req.params.id);
  res.json({
    status: "Task Deleted",
  });
};
module.exports = taskController;
