const router = require('express').Router(),
  { sendWelcomeEmail, forgotPasswordEmail } = require('../../emails/index'),
  User = require('../../db/models/user'),
  bcrypt = require('bcryptjs');

// Login a user
router.post('/api/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
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

// Create a user
router.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (e) {
    res.status(201).status(400).send(e);
  }
});

// Reset Password

router.get('/api/users/password/reset', async (req, res) => {
  const newPassword = await bcrypt.hash(req.query.password, 8);
  const update = { password: newPassword };
  const filter = { email: req.query.email };

  const user = await User.findOne({
    email: req.query.email
  });

  try {
    if (user.tokens[0].token !== req.query.token) {
      throw new Error();
    }

    await User.findOneAndUpdate(filter, update);
    forgotPasswordEmail(email, token);
    res.redirect('/');
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

//Redirect to password reset page
router.get('/api/password/:token', (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 6000000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

module.exports = router;
