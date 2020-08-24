const router = require('express').Router(),
  mongoose = require('mongoose'),
  Session = require('../../db/models/session');

// Get all sessions associated with a Task
router.get('/api/sessions', async (req, res) => {
  const match = {},
    sort = {};
  try {
    await req.tasks
      .populate({
        path: 'sessions',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.json(req.tasks.sessions);
  } catch (e) {
    res.status(500).send();
  }
});

// Get a specific session
router.get('/api/sessions/:id', async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid session id');

  try {
    const session = await Session.findOne({ _id, owner: req.task._id });
    if (!session) return res.status(404).send();

    res.json(session);
  } catch (e) {
    res.status(500).send();
  }
});

// Create a session
router.post('/api/sessions', async (req, res) => {
  const session = await new Session({
    ...req.body,
    owner: req.user._id
  });
  try {
    session.save();
    res.status(201).json(session);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete a task
router.delete('/api/sessions/:id', async (req, res) => {
  try {
    const session = await Session.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!session) return res.status(404).send();
    res.json(session);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
