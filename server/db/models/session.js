const mongoose = require('mongoose');
const moment = require('moment');

const sessionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    taskName: {
      type: String,
      required: true
    },
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    sessionType: {
      type: String,
      enum: ['spontaneous', 'planned']
    },
    start: {
      type: [Date],
      required: true
    },
    end: {
      type: [Date],
      required: true
    },
    allDay: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

sessionSchema.methods.toJSON = function () {
  const session = this;
  const sessionObject = session.toObject();
  return sessionObject;
};
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
