const router = require('express').Router(),
  mongoose = require('mongoose'),
  Session = require('../../db/models/session');

// Get all sessions on Chart
router.get('/linechart/:taskId', async (req, res) => {
  try {
    const sessions = await Session.find({
      taskId: req.param.taskId
    });
    console.log(sessions);

    res.send(sessions);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = router;
