const router = require('express').Router(),
  passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy;

//Google Sign in
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] }),
  (req, res) => {
    console.log('In Index');
    res.redirect('/users');
  }
);

router.get(
  '/auth/google/users',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/users');
  }
);

module.exports = router;