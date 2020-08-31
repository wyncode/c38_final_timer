const router = require('express').Router(),
  mongoose = require('mongoose'),
  PlannedSession = require('../../db/models/plannedSession');

// Get all sessions associated with a Task
router.get('/api/plannedSessions/:taskName', async (req, res) => {
  try {
    const session = await PlannedSession.find({
      taskName: req.params.taskName
    });
    res.json(session);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// Get a specific session
router.get('/api/plannedSession/:id', async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid session id');

  try {
    const plannedSession = await PlannedSession.find({ _id });
    if (!plannedSession) return res.status(404).send();

    res.json(plannedSession);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// Create a session
router.post('/api/plannedSession', async (req, res) => {
  const session = await new PlannedSession({
    ...req.body,
    taskId: req.params.taskId
  });
  try {
    session.save();
    res.status(201).json(session);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// Delete a session
router.delete('/api/plannedSession/:id', async (req, res) => {
  try {
    const plannedSession = await PlannedSession.findOneAndDelete({
      _id: req.params.id
    });
    if (!plannedSession) return res.status(404).send();
    res.json(plannedSession);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = router;
