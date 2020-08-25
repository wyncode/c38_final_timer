const router = require('express').Router(),
  mongoose = require('mongoose'),
  Session = require('../../db/models/session');

// Get all sessions associated with a Task
router.get('/api/sessions/:taskId', async (req, res) => {
  try {
    const session = await Session.find({ taskId: req.params.taskId });
    res.json(session);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// Get a specific session
router.get('/api/session/:id', async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid session id');

  try {
    const session = await Session.find({ _id });
    if (!session) return res.status(404).send();

    res.json(session);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// Create a session
router.post('/api/session', async (req, res) => {
  const session = await new Session({
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
router.delete('/api/session/:id', async (req, res) => {
  try {
    const session = await Session.findOneAndDelete({
      _id: req.params.id
    });
    if (!session) return res.status(404).send();
    res.json(session);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = router;
