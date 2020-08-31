const router = require('express').Router(),
  mongoose = require('mongoose'),
  Session = require('../../db/models/session'),
  Task = require('../../db/models/task');

// Get all sessions
router.get('/api/sessions', async (req, res) => {
  try {
    const sessions = await Session.find();
    console.log('SESSIONS :', sessions, sessions.length);
    res.json(sessions);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// Get all sessions associated with a Task
router.get('/api/sessions/:taskName', async (req, res) => {
  try {
    const session = await Session.find({ taskName: req.params.taskName });
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
router.post('/api/session/', async (req, res) => {
  const session = await new Session({
    ...req.body,
    taskId: req.body.taskId
  });
  try {
    const task = await Task.findById(req.body.taskId);
    const newSession = await session.save();
    task.sessions.push(newSession._id);
    await task.save();
    console.log('SESSION: ', newSession);
    res.json({ data: newSession });
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
