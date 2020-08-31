const mongoose = require('mongoose');

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
    sessionType: {
      type: String,
      enum: ['pomo', 'default', 'custom', 'planned']
    },
    start: {
      type: [Date]
    },
    end: {
      type: [Date]
    },
    allDay: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 60
    }
  },
  {
    timestamps: true
  }
);
// Converts dates to readable format
sessionSchema.methods.toJSON = function () {
  const session = this;
  const sessionObject = session.toObject();
  if (sessionObject.start) {
    sessionObject.start = moment(sessionObject.dueDate).format('LLL');
  }
  if (sessionObject.end) {
    sessionObject.end = moment(sessionObject.end).format('LLL');
  }
};
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
