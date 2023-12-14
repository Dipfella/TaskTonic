const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  priority: { type: String, required: false },
  date_execute: { type: Date, required: true },
  ip_user: { type: String, required: true },
  sub_tasks: [
    {
      title_subTask: { type: String },
      description_subTask: { type: String },
      status_subTask: { type: String },
      priority_subTask: { type: String },
    },
  ],
});

module.exports = mongoose.model("Task", TaskSchema);
