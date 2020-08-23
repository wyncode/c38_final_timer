const mongoose = require('mongoose');
moment = require('moment');

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    numOfSessions: {
      type: Number,
      default: 1
    },
    startDate: {
      type: Date
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);
taskSchema.virtual('sessions', {
  ref: 'Session',
  localField: '_id',
  foreignField: 'owner'
});

taskSchema.methods.toJSON = function () {
  const task = this;
  const taskObject = task.toObject();
  if (taskObject.dueDate) {
    taskObject.dueDate = moment(taskObject.dueDate).format('YYYY-MM-DD');
  }
  return taskObject;
};
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
