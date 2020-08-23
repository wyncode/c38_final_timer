const express = require('express'),
  router = new express.Router(),
  User = require('../../db/models/user');

//Creating the User

router.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({
      name,
      email,
      password
    });

    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

//Logining in for User

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

// Get current user

router.get('/users', async (req, res) => {
  console.log('Trying to get user');
  return res.json(req.user);
});

// Logout a user

router.post('/users/logout', async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'Logged out' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

//Update a Password
router.put('/password', async (req, res) => {
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
