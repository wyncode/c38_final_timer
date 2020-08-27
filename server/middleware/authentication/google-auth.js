const passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy;
//Google sign in
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
      console.log("where is my error bruh");
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
        console.log("where is my error bruh");
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

module.exports = passport;