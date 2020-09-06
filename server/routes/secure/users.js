const express = require('express'),
  router = new express.Router();
// Login Check
router.post('/api/loginCheck', async (req, res) => res.sendStatus(200));
// Logout a user
router.post('/api/users/logout', async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'Logged out!' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});
// Logout all devices
router.post('/api/users/logoutAll', async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.sendStatus(200);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});
// Get current user
router.get('/api/users/me', async (req, res) => {
  res.json(req.user);
});
// Update a user
router.patch('/api/users/me', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'avatar'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'Invalid updates!' });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});
// Delete a user
router.delete('/api/users/me', async (req, res) => {
  try {
    await req.user.remove();
    res.clearCookie('jwt');
    res.json(req.user);
  } catch (e) {
    res.sendStatus(500).json({ error: e.toString() });
  }
});
//update a password- AKA resets the password
router.put('/api/password', async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'password updated successfully' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});
module.exports = router;
