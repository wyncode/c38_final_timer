const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy;
//Google sign in
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/users/auth/google/users'
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

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
