const mongoose = require('mongoose');
const Session = require('./session');
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
// creates relatonship between task and session
taskSchema.virtual('sessions', {
  ref: 'Session',
  localField: '_id',
  foreignField: 'owner'
});

// Converts dates to readable format
taskSchema.methods.toJSON = function () {
  const task = this;
  const taskObject = task.toObject();
  if (taskObject.dueDate) {
    taskObject.dueDate = moment(taskObject.dueDate).format('YYYY-MM-DD');
  }
  return taskObject;
};

// Delete user sessions when a task is removed.
taskSchema.pre('remove', async function (next) {
  const task = this;
  await Session.deleteMany({
    taskId: task._id
  });
  next();
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
