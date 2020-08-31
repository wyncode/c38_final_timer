const mongoose = require('mongoose');

const plannedSessionSchema = new mongoose.Schema(
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
      enum: ['pomo', 'default', 'custom']
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
plannedSessionSchema.methods.toJSON = function () {
  const plannedSession = this;
  const plannedSessionObject = session.toObject();
  if (plannedSessionObject.start) {
    plannedSessionObject.start = moment(plannedSessionObject.start).format(
      'LLL'
    );
  }
  if (plannedSessionObject.end) {
    plannedSessionObject.end = moment(plannedSessionObject.end).format('LLL');
  }
};
const PlannedSession = mongoose.model('PlannedSession', plannedSessionSchema);

module.exports = PlannedSession;
