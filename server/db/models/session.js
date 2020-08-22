const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    },
    sessionType: {
      type: String,
      enum: ['pomo', 'default', 'custom']
    },
    activeSession: {
      type: Boolean,
      default: false
    },
    sessionDates: {
      type: [Date]
    },
    timeSpent: {
      type: Number,
      default: 60
    }
  },
  {
    timestamps: true
  }
);

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
