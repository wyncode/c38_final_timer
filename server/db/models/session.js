const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    sessionType: {
      type: String
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

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
